class BusinessUserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :owner

  def owner
    user_business = self.object.user_businesses.find_by(business_id: @instance_options[:business_id].to_i)
    user_business.owner
  end
end
