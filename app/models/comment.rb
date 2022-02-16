class Comment < ApplicationRecord
  belongs_to :item
  validates :name, presence: true
  validates :comment, presence: true
end
