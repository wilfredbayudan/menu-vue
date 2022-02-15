class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image
end
