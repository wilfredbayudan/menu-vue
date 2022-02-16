class ChangeNameToCategory < ActiveRecord::Migration[7.0]
  def change
    remove_column :categories, :name
    add_column :categories, :category, :string
  end
end
