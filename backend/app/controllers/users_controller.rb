class UsersController < ApplicationController
  def index
    users = User.all
    render json: users, only: [:name, :address]
  end

  def show
    user = User.find_by(id: params[:id])
    render json: user, only: [:name, :ad]
  end

  def update
    user = User.find(params[:id])
    user.update(user_params)
    render json: user
  end

  private

  def user_params
    params.require(:user).permit(:name, :address)
  end
end
