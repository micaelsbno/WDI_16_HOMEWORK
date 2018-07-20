require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require_relative 'db_config'
require_relative 'models/pokemons'
require_relative 'models/traits'
require 'pry'

get '/' do
  @pokemons = Pokemon.all
  erb :index
end


get '/pokemons/new' do
  erb :new
end

put '/pokemons/:id' do
  pokemon = Pokemon.find(params[:id])
  pokemon.name = params[:name]
  pokemon.image_url = params[:image_url]
  pokemon.save
  redirect "/pokemons/#{ params[:id] }"
end

get '/pokemons/:id' do
  @pokemon = Pokemon.find( params[:id] )
  @traits = @pokemon.traits
  erb :pokemon
end

post '/pokemons' do
  pokemon = Pokemon.new
  pokemon.name = params[:name]
  pokemon.image_url = params[:image_url]
  pokemon.save
  redirect '/'
end

delete '/pokemons/:id' do
  pokemon = Pokemon.find(params[:id])
  pokemon.destroy
  redirect '/'
end

get '/pokemons/:id/edit' do
  @pokemon = Pokemon.find(params[:id])
  erb :edit
end

post '/pokemons/trait/:id' do
  trait = Trait.new
  trait.name = params[:name]
  trait.description = params[:description]
  trait.pokemon_id = params[:pokemon_id]
  trait.save
  redirect "/pokemons/#{ params[:id] }"
end

put '/pokemons/trait/:id' do
  trait = Trait.find(params[:id])
  trait.name = params[:name]
  trait.description = params[:description]
  trait.save
  redirect "/pokemons/#{ params[:pokemon_id] }"
end

delete '/pokemons/trait/:id' do
  trait = Trait.find(params[:id])
  pokemon = Pokemon.find(trait.pokemon_id)
  trait.destroy
  redirect "/pokemons/trait/#{ pokemon.id }/edit"
end

get '/pokemons/trait/:id/add' do
  @pokemon = Pokemon.find(params[:id])
  erb :new_trait  
end

get '/pokemons/trait/:id/edit' do
  @pokemon = Pokemon.find(params[:id])
  erb :edit_trait
end


delete '/pokemons/:id' do
  trait = Trait.find( params[:id] )
  trait.destroy
  redirect '/'
end