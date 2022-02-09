class Location < ApplicationRecord
  has_many :location_menus
  has_many :menus, through: :location_menus
end
