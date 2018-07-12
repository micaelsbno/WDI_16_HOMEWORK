require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
require 'pry'

get '/' do
  erb(:home)  
end


get '/tick' do
  @stock = StockQuote::Stock.quote(params[:symbol])
  erb(:index)
end

get '/about' do
  "<h1> goodbye to yahoo finance</h1>"
end