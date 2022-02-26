Rails.application.routes.draw do

  resources :books

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/businesses/slug/:slug_url', to: 'businesses#find_by_slug'
  resources :businesses do
    resources :users, only: [:index, :create, :destroy]
    resource :menu, only: [:show] do
      resources :categories do
        resources :items do
          resources :comments, except: [:update]
        end
      end
    end
  end
  patch '/businesses/:business_id/menu/categories/:category_id/items/:item_id/likes', to: 'items#like'

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }

end
