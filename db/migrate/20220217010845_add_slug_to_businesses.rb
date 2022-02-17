class AddSlugToBusinesses < ActiveRecord::Migration[7.0]
  def change
    add_column :businesses, :slug, :string
  end
end
