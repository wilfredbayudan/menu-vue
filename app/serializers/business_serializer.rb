class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :menu_id

  def menu_id
    object.menu.id
  end
end
