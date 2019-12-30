class BuyersController < ApplicationController
  def index
    buyers = Buyer.all
    render json: buyers, only: [:name, :address]
  end
end
