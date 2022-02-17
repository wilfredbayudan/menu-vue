class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :name, :slug, :description, :image

  has_one :menu
end
