class WorkItem < ApplicationRecord
  belongs_to :invoice
  validates :description, {
    presence: true,
    length: { in: 3..100 },
  }
  validates :quantity, {
    presence: true,
  }
  validates :rate, {
    presence: true,
  }
  validates :amount, {
    presence: true,
  }
end
