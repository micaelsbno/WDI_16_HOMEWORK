require "sinatra"
require "sinatra/reloader"

get '/' do
  @number = 99
  erb(:index)
end

get '/:number' do
  @number = params[:number]
  erb(:index)
end