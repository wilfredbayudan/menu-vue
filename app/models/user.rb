class User < ApplicationRecord
  before_save :downcase_email

  validates :first_name, presence: true, length: { maximum: 80 }
  validates :last_name, presence: true, length: { maximum: 80 }
  validates :email, uniqueness: { case_sensitive: false }, email: true
  has_secure_password
  validates :password, length: { minimum: 6, maximum: 25 }
  has_many :user_businesses
  has_many :businesses, through: :user_businesses

  private

  def downcase_email
    self.email = email.downcase
  end
end
