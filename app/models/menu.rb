class Menu < ApplicationRecord
  belongs_to :business
  has_many :categories
  has_many :items, through: :categories
end
