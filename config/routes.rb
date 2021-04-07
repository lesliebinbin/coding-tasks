Rails.application.routes.draw do
  resources 'people' do
    collection do
      post 'upload'
    end
  end
  root 'home#index'
end
