class Comment < ApplicationRecord
  belongs_to :item
  validates :author, presence: true
  validates :comment, presence: true
end
