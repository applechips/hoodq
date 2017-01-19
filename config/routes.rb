Rails.application.routes.draw do
  resources :map_data
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'map_data#index'
end
