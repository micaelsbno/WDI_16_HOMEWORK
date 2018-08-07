Rails.application.routes.draw do
  resources :frameworks

  post '/frameworks/new', to: 'frameworks#create'

  get '/', to: 'frameworks#index'
  get '/frameworks/new', to: 'frameworks#new'

  get '/frameworks/:id/edit', to: 'frameworks#edit'
  put '/frameworks/:id', to: 'frameworks#update'
  
  post '/votes/new', to: 'votes#create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
