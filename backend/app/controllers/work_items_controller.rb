class WorkItemsController < ApplicationController
  def index
    workItems = WorkItem.all
    render json: workItems, except: [:created_at, :updated_at]
  end

  def show
    workItem = User.find_by(id: params[:id])
    render json: workItem, except: [:created_at, :updated_at]
  end

  def update
    workItem = WorkItem.find(params[:id])
    workItem.update(work_item_params)
    render json: workItem
  end

  def create
    work_item = WorkItem.new(work_item_params)
    if work_item.save
      render json: work_item
    else
      render :json => { :errors => work_item.errors.full_messages }
    end
  end

  def destroy
    workItem = WorkItem.find(params[:id])
    workItem.destroy
    render json: workItem
  end

  private

  def work_item_params
    params.require(:work_item).permit(:invoice_id, :description, :quantity, :amount)
  end
end
