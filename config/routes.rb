Rails.application.routes.draw do

  match '*all', to: 'application#preflight', via: [:options]

  resources :users, only: [:index, :create]
  # get '*path', to: 'home#index'
  # root         to: 'home#index'

end
