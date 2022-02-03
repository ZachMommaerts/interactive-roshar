class ChapterLocationCharacterSerializer < ActiveModel::Serializer
  attributes :id, :character_id, :chapter_id, :location_id, :known_location, :summary
end
