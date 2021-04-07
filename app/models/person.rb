class Person < ApplicationRecord
  self.per_page=15
  scope :order_by_created_at, ->{order(created_at: :desc)}
end
