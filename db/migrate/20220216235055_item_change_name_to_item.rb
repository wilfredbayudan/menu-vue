class ItemChangeNameToItem < ActiveRecord::Migration[7.0]
  def change
    remove_column :items, :name
    add_column :items, :item, :string
  end
end
