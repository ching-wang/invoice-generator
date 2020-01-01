class Invoice < ApplicationRecord
  belongs_to :user
  belongs_to :buyer
  has_many :workItems

  #add validations
  validates :invoiceNumber, {
    presence: true,
    length: { in: 6..12 },
    numericality: { only_integer: true },
  }
  validates :invoiceDate, {
    presence: true,
  }

  validates :duedate, {
    presence: true,
  }
end
