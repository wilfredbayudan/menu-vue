class ItemSerializer < ActiveModel::Serializer
  attributes :id, :category_id, :item, :description, :image, :price, :likes, :comments

  def comments
    self.object.comments.length
  end
end
