class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.float :x_coordinates
      t.float :y_coordinates
      t.float :z_coordinates

      t.timestamps
    end
  end
end
