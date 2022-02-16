class MenuSerializer < ActiveModel::Serializer
  has_many :categories
  has_many :items
end
