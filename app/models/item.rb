class Item < ApplicationRecord
  has_many :comments, dependent: :destroy
  belongs_to :category
  validates :category_id, presence: true
  validates :item, presence: true, length: { maximum: 50 }, uniqueness: { case_sensitive: false, scope: :category_id, message: "already exists" }
  validates :description, length: { maximum: 150 }
  validates :price, presence: true, format: { with: /\A\d+(?:\.\d{0,2})?\z/, message: "is invalid" }, numericality: { greater_than: 0, less_than: 1000000 }

  def like
    self.likes += 1
    self.save
  end

  def dislike
    if self.likes > 0
      self.likes -= 1;
      self.save
    end
  end

end
