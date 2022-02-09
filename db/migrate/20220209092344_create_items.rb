class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.integer :category_id
      t.string :name
      t.string :description
      t.decimal :price
      t.string :image
      t.integer :likes, :default => 0

      t.timestamps
    end
  end
end
