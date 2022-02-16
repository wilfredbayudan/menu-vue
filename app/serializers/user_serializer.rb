class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :businesses

  def businesses

    return [] unless self.object.businesses.length > 0

    user_businesses = self.object.user_businesses.map do |user_business|
      business = Business.find(user_business.id)
      { 
        business_id: user_business.id,
        name: business.name,
        owner: user_business.owner
      }
    end

  end

end
