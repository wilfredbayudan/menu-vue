class User < ApplicationRecord
  has_secure_password
  has_many :user_businesses
  has_many :businesses, through: :user_businesses
  validates :email, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true
end
