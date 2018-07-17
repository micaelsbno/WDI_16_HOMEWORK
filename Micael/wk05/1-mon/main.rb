require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'
require 'pry'
require 'FileUtils'

get '/' do
  erb(:index)
end

get '/movie' do
  @movie = HTTParty.get("http://www.omdbapi.com/?t=#{params[:movie_title].downcase}&apikey=2f6435d9")
  @scores = @movie['Ratings'].map{|source|source['Value']}
  erb :movie
end

get '/search' do
  
  @search_title = params[:movie_title]
  @movie = HTTParty.get("http://www.omdbapi.com/?t=#{@search_title.downcase}&apikey=2f6435d9")
  @search = HTTParty.get("http://www.omdbapi.com/?s=#{@search_title.downcase}&apikey=2f6435d9")

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

