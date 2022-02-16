Rails.application.routes.draw do
  
  get '/hello', to: 'application#hello_world'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  resources :businesses do
    resource :menu, only: [:show] do
      resources :categories do
        resources :items do
          resources :comments, except: [:update]
        end
      end
    end
  end

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }

end
