class UsersController < ApplicationController
  def index
    users = User.all
    render json: users, only: [:name, :address]
  end
end
