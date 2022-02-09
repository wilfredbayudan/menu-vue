class ChangeDecimalToFloat < ActiveRecord::Migration[7.0]
  def change
    remove_column :items, :price
    add_column :items, :price, :float
  end
end
