Rails.application.routes.draw do

  match '*all', to: 'application#preflight', via: [:options]

  get 'current_user', to: 'application#current_user'
  get 'request_token', to: 'tokens#request_token'
  get 'access_token', to: 'tokens#access_token'

  resources :users, only: [:index, :create]
  put 'users/profile', to: 'users#update'
  get 'users/profile', to: 'users#profile_info'
  
  get '*path', to: 'home#index'
  root         to: 'home#index'

  match '*all', to: 'application#index', via: [:get]

end
