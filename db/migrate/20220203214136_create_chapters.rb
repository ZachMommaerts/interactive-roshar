class CreateChapters < ActiveRecord::Migration[7.0]
  def change
    create_table :chapters do |t|
      t.integer :book_id
      t.string :section
      t.string :title
      t.year :integer

      t.timestamps
    end
  end
end
