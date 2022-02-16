class Menu < ApplicationRecord
  belongs_to :business
  has_many :categories, dependent: :destroy
  has_many :items, through: :categories
end
