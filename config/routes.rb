Rails.application.routes.draw do
  
  get '/hello', to: 'application#hello_world'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  resources :businesses, only: [:index, :create, :show]
  resources :locations, only: [:index]
  post '/businesses/:id/locations', to: 'locations#create'
  get '/businesses/:id/locations', to: 'locations#index'

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }

end
