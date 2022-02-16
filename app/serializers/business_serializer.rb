class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image

  has_one :menu
end
