class Business < ApplicationRecord
  has_many :user_businesses, dependent: :destroy
  has_many :users, through: :user_businesses
  has_one :menu, dependent: :destroy
  validates :name, presence: true, uniqueness: { case_sensitive: false }
  validates :slug, presence: true, uniqueness: { case_sensitive: false, message: 'URL already in use, try a new name'  }
  validates :description, length: { maximum: 350 }
end
