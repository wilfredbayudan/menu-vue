class CreateLocationMenus < ActiveRecord::Migration[7.0]
  def change
    create_table :location_menus do |t|
      t.integer :menu_id
      t.integer :location_id

      t.timestamps
    end
  end
end
