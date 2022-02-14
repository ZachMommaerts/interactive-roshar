class BookSerializer < ActiveModel::Serializer
  attributes :id, :title

  has_many :chapters
  # def chapter_info
  # info = []

  # object.chapters.each do |chapter|
  #   c = {}
  #   c.chapter_character_locations
  #   c.characters
  #   c.locations
  # end
  # end
end
