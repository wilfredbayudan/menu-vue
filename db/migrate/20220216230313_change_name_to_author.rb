class ChangeNameToAuthor < ActiveRecord::Migration[7.0]
  def change
    remove_column :comments, :name
    add_column :comments, :author, :string
  end
end
