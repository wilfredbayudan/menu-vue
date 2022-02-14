class Business < ApplicationRecord
  belongs_to :user
  has_many :locations
  validates :name, presence: true
  validates :description, presence: true
end
