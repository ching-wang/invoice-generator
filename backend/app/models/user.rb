class User < ApplicationRecord
  has_many :invoices
  has_many :buyers, through: :invoices

  validates :name, presence: true
  # validates :address, {
  #   presence: true,
  #   length: {in 10..200 }
  # }

end
