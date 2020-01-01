class InvoicesController < ApplicationController
  def index
    invoices = Invoice.all
    render json: invoices, include: [:user, :buyer]
  end

  def show
    invoice = Invoice.find_by(id: params[:id])
    render json: invoice, include: [:user, :buyer]
  end
end
