class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :locations

end
