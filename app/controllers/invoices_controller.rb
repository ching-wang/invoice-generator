class InvoicesController < ApplicationController
  def index
    invoices = Invoice.all
    render json: invoices, include: [:user, :buyer]
  end
end
