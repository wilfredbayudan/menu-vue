class Location < ApplicationRecord
  belongs_to :business
  has_many :location_menus
  has_many :menus, through: :location_menus
end
