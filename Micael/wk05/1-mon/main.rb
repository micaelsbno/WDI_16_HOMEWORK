require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'
require 'pry'

get '/' do
  erb(:index)
end

get '/movie' do
  @movie = HTTParty.get("http://www.omdbapi.com/?t=#{params[:movie_title].downcase}&apikey=2f6435d9")
  if @movie['Response'] != 'False'
    @scores = @movie['Ratings'].map{|source|source['Value']}
  end
  erb(:movie)
end

