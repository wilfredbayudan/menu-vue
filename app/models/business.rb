class Business < ApplicationRecord
  belongs_to :user
  has_many :locations
  validates :name, presence: true, uniqueness: true
end
