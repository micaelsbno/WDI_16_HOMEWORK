require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'pokedex'
}

ActiveRecord::Base.establish_connection(options)