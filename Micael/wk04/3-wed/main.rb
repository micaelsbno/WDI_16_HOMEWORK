require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

get '/' do
  erb(:home)  
end


get '/tick' do
  @stock = StockQuote::Stock.quote(params[:symbol])
  erb(:index)
end

