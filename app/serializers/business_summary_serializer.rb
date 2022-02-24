class BusinessSummarySerializer < ActiveModel::Serializer
  attributes :id, :name, :slug, :description, :image, :popular_items

  def popular_items
    self.object.menu.items.order("likes DESC").limit(3)
  end
end
