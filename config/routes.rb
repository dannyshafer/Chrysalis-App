Rails.application.routes.draw do

  resources :users, only: [:index]
  # get '*path', to: 'home#index'
  # root         to: 'home#index'

end
