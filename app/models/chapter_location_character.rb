class ChapterLocationCharacter < ApplicationRecord
    belongs_to :chapter
    belongs_to :character
    belongs_to :location
end
