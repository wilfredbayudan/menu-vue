class BusinessSummarySerializer < ActiveModel::Serializer
  attributes :id, :name, :slug, :description, :image, :menu_id

  def menu_id
    self.object.menu.id
  end
end
