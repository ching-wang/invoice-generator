class Buyer < ApplicationRecord
  has_many :invoices
  # validates :name, {
  #   presence: true,
  #   length: {in:2..80}
  # },
  # validates :address, {
  #   presence: true,
  #   length: {in 10..200 },
  # }
end
