class BusinessSummarySerializer < ActiveModel::Serializer
  attributes :id, :name, :slug, :description, :image
end
