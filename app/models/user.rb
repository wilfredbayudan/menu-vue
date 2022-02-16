class User < ApplicationRecord
  has_secure_password
  has_many :user_businesses
  has_many :businesses, through: :user_businesses
  validates :email, uniqueness: { case_sensitive: false }, email: true
  validates :first_name, presence: true, length: { maximum: 80 }
  validates :last_name, presence: true, length: { maximum: 80 }
end
