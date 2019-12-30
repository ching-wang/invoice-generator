class User < ApplicationRecord
  has_many :invoices
  has_many :buyers, through: :invoices
end
