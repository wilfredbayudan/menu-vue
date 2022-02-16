class Category < ApplicationRecord
  belongs_to :menu
  has_many :items, dependent: :destroy
  validates :category, presence: true, uniqueness: { case_sensitive: false, scope: :menu_id }, length: { maximum: 30 }
  validates :description, length: { maximum: 200 }
  validates :menu_id, presence: true
end
