class Invoice < ApplicationRecord
  belongs_to :user
  belongs_to :buyer
  has_many :workItems

  #add validations
  # validates :invoiceNumber, {
  #   length: { in: 6..12 },
  #   numericality: { only_integer: true },
  # }
end
