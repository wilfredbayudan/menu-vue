class AddOwnerToUserBusinesses < ActiveRecord::Migration[7.0]
  def change
    add_column :user_businesses, :owner, :boolean
  end
end
