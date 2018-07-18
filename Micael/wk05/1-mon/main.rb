require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'
require 'pg'
require 'pry'

get '/' do
  erb(:index)
end

def prepare_sql(statement_name, sql, args)
  conn = PG.connect(dbname: 'movie_db')
  conn.prepare(statement_name, sql)
  result = conn.exec_prepared(statement_name, args)
  conn.close
  return result
end

get '/movie' do
  movie_id = prepare_sql(
    "find_movie",
    "SELECT imdbid FROM movies WHERE LOWER(title) = LOWER($1);",
    [params[:movie_title]]
    )
  unless movie_id.ntuples > 0
    @movie = HTTParty.get(
      "http://www.omdbapi.com/?t=#{params[:movie_title].downcase}&apikey=2f6435d9"
      )
    prepare_sql(
      "create_movie", 
      "INSERT INTO movies
      (title, director, genre, plot, poster, awards, imdbid, metascore, year)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);",
      [@movie['Title'], @movie['Director'], @movie['Genre'], @movie['Plot'], @movie['Poster'], @movie['Awards'], @movie['imdbID'] , @movie['Metascore'].to_i, @movie['Year'].to_i]
      )
  end
  movie_id = prepare_sql(
    "movie_id",
    "SELECT imdbid from movies where LOWER(title) = LOWER($1);",
    [params[:movie_title]]
    )[0]['imdbid']
  @movie = prepare_sql("movie", "SELECT * FROM movies where imdbid = $1;", [movie_id])[0]
  erb :movie
end


get '/search' do
  
  @movie = HTTParty.get("http://www.omdbapi.com/?t=#{ params[:movie_title].downcase }&apikey=2f6435d9")
  @search = HTTParty.get("http://www.omdbapi.com/?s=#{ params[:movie_title].downcase }&apikey=2f6435d9")
  File.open('./history/search_history.txt', 'a+') {|search| search.write("#{params[:movie_title]}\n")}

  if @search['Response'] == 'False'
    erb :movie
  elsif @search['Search'].length == 1
    @scores = @movie['Ratings'].map{|source|source['Value']}
    erb :movie
  else
    erb :search
  end

end

