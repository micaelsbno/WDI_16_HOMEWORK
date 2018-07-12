require "sinatra"
require "sinatra/reloader"

get '/' do
  @number = 99
  erb(:index)
end

get '/:number' do
  # matches "GET /hello/foo" and "GET /hello/bar"
  # params[:name] is 'foo' or 'bar'
  @number = params[:number]
  @potions = "potions"
  erb(:index)
end