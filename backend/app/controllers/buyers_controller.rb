class BuyersController < ApplicationController
  def index
    buyers = Buyer.all
    render json: buyers, only: [:name, :address]
  end

  def show
    buyer = Buyer.find_by(id: params[:id])
    render json: buyer, only: [:name, :ad]
  end

  def update
    buyer = Buyer.find(params[:id])
    buyer.update(buyer_params)
    render json: buyer
  end

  private

  def buyer_params
    params.require(:buyer).permit(:name, :address)
  end
end
