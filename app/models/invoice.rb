class Invoice < ApplicationRecord
  belongs_to :user
  belongs_to :buyer
  has_many :workItems
end
