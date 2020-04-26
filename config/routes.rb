Rails.application.routes.draw do
  
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :books, only: %i(show)
    end
  end
end
