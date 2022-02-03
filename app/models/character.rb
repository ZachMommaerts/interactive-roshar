class Character < ApplicationRecord
    has_many :chapter_location_characters
    has_many :locations, through: :chapter_location_characters
    has_many :chapters, through: :chapter_location_characters
end
