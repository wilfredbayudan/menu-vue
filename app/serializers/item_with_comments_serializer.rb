class ItemWithCommentsSerializer < ActiveModel::Serializer
  attributes :id, :category_id, :item, :description, :image, :price, :likes, :comments

  def comments
    self.object.comments
  end
end
