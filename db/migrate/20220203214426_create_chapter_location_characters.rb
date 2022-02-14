class CreateChapterLocationCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :chapter_location_characters do |t|
      t.integer :character_id
      t.integer :chapter_id
      t.integer :location_id
      t.string :summary

      t.timestamps
    end
  end
end
