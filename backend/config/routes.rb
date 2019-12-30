Rails.application.routes.draw do
  resources :work_items
  resources :invoices
  resources :buyers
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
