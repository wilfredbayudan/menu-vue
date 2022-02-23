class CategorySerializer < ActiveModel::Serializer
  attributes :id, :category, :description, :slug
end
