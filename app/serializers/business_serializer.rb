class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :owner_id
  has_many :locations

  def owner_id
    object.user_id
  end
end
