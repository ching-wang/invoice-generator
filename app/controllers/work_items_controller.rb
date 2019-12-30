class WorkItemsController < ApplicationController
  def index
    workItems = WorkItem.all
    render json: workItems, except: [:created_at, :updated_at]
  end
end
