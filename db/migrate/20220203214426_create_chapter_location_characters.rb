class CreateChapterLocationCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :chapter_location_characters do |t|
      t.integer :character_id
      t.integer :chapter_id
      t.integer :location_id
      t.year :string
      t.string :summary
      t.boolean :known_location

      t.timestamps
    end
  end
end
