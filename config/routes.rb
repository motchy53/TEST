Rails.application.routes.draw do
<<<<<<< HEAD
  get '/' => "home#top"
=======
  get 'hello_page/hello'
  root 'hello_page#hello'
>>>>>>> origin/master
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
