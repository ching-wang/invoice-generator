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
    workItem.update(workItem_params)
    render json: workItem
  end

  private

  def workItem_params
    params.require(:workItem).permit(:description, :quantity, :rate, :amount)
  end
end
