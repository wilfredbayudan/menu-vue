class Item < ApplicationRecord
  has_many :comments, dependent: :destroy
  belongs_to :category
  validates :category_id, presence: true
  validates :item, presence: true, length: { maximum: 50 }, uniqueness: { case_sensitive: false, scope: :category_id, message: "already exists" }
  validates :description, length: { maximum: 150 }
  validates :price, presence: true

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
