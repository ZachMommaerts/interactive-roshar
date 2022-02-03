class Location < ApplicationRecord
    has_many :chapter_location_characters
    has_many :chapters, through: :chapter_location_characters
    has_many :characters, through: :chapter_location_characters
end
