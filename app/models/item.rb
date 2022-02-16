class Item < ApplicationRecord
  has_many :comments, dependent: :destroy
  belongs_to :category
  validates :category_id, presence: true
  validates :item, presence: true, length: { maximum: 50 }, uniqueness: { case_sensitive: false, scope: :category_id, message: "already exists" }
  validates :description, length: { maximum: 150 }
  validates :price, presence: true
end
