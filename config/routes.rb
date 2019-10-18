Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create]
      post '/login', to: 'auth#create'
      post '/signup', to: 'users#create'
      get '/profile', to: 'users#profile'
      post '/toggle-like/:recipe_id', to: 'users#toggle_likes'
      get '/likes', to: 'users#likes'
    end
  end
  resources :recipes, :items
  
end
