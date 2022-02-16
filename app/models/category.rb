class Category < ApplicationRecord
  belongs_to :menu
  has_many :items

  validates :name, presence: true
  validates :menu_id, presence: true
end
