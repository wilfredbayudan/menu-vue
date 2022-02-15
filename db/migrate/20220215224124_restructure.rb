class Restructure < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :username
    remove_column :businesses, :user_id
    add_column :businesses, :image, :string
    remove_column :menus, :name
    remove_column :menus, :description
    add_column :menus, :business_id, :string
    drop_table :locations
    drop_table :location_menus
  end
end
