class UpdatePriceInItems < ActiveRecord::Migration[7.0]
  def change
    remove_column :items, :price
    add_column :items, :price, :decimal, :precision =>  8, :scale => 2
  end
end
