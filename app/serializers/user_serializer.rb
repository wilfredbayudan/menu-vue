class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :businesses

  def businesses

    return [] unless self.object.businesses.length > 0

    user_businesses = self.object.user_businesses.map do |user_business|
      business = Business.find(user_business.business_id)
      { 
        business_id: user_business.business_id,
        name: business.name,
        description: business.description,
        slug: business.slug,
        image: business.image,
        owner: user_business.owner
      }
    end

  end

end
