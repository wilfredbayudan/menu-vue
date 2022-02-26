class UserBusiness < ApplicationRecord
  belongs_to :user
  belongs_to :business
  validates :user_id, uniqueness: { case_sensitive: false, scope: :business_id, message: "already has access to this business" }
end
