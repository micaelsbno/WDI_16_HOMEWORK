require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'
require 'pg'
require 'pry'
require_relative 'models/movies'

get '/' do
  erb(:index)
end

get '/movie' do
  movie = Movie.select_id(params[:movie_title])
  if movie.ntuples == 0
    @movie = Movie.select_ext(params[:movie_title])
    Movie.save(@movie)
  end
  movie_id = Movie.select_id(params[:movie_title])[0]['imdbid']
  binding.pry
  @movie = Movie.select_info(movie_id)[0]
  erb :movie
end

get '/search' do
  @search = Movie.search_ext(params[:movie_title].downcase)
  File.open('./history/search_history.txt', 'a+') {|search| search.write("#{params[:movie_title]}\n")}
  if @search['Response'] == 'False'
    @movie = {'Response' => 'False'}
    erb :movie
  elsif @search['Search'].length == 1
    redirect "/movie?movie_title=#{params[:movie_title].downcase}"
  else
    erb :search
  end

end

