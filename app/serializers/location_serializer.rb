class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :x_coordinates, :y_coordinates, :z_coordinates
end
