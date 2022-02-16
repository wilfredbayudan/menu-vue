class ItemSerializer < ActiveModel::Serializer
  attributes :id, :category_id, :item, :description, :image, :price, :likes
end
