class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name

  has_many :user_businesses
end
