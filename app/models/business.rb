class Business < ApplicationRecord
  has_many :user_businesses
  has_many :users, through: :user_businesses
  has_one :menu
  validates :name, presence: true, uniqueness: true
end
