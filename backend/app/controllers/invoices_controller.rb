class InvoicesController < ApplicationController
  def index
    invoices = Invoice.all
    render json: invoices, include: [:user, :buyer, :workItems]
  end

  def create
    buyer = Buyer.new()
    buyer.save
    params = invoice_params
    params[:buyer_id] = buyer.id
    invoice = Invoice.new(params)
    if invoice.save
      render json: invoice, include: [:user, :buyer, :workItems]
    else
      render :json => { :errors => invoice.errors.full_messages }
    end
  end

  def show
    invoice = Invoice.find_by(id: params[:id])
    render json: invoice, include: [:user, :buyer, :workItems]
  end

  def update
    invoice = Invoice.find(params[:id])
    invoice.update(invoice_params)
    render json: invoice, include: [:user, :buyer, :workItems]
  end

  private

  def invoice_params
    params.require(:invoice).permit(
      :logo,
      :invoiceNumber,
      :invoiceDate,
      :duedate,
      :notes,
      :user_id
    )
  end
end
