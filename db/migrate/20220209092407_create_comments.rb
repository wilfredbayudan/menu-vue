class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.integer :item_id
      t.string :name
      t.string :comment

      t.timestamps
    end
  end
end
