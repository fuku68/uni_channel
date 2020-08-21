Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace 'api' do
    namespace 'v1' do
      resources :universities, only: [:index] do
        resources :feeds, only: [:index, :create, :destroy] do
          resources :coments, only: [:index, :create, :destroy]
        end
      end

      resources :tags, only: [:index]
    end
  end
end
