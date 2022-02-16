class ItemSerializer < ActiveModel::Serializer
  attributes :id, :category_id, :name, :description, :image, :price, :likes
end
