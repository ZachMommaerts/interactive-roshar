class ChapterSerializer < ActiveModel::Serializer
  attributes :id, :title, :section, :year

  belongs_to :book
  has_many :chapter_location_characters
  has_many :locations, through: :chapter_location_characters
  has_many :characters, through: :chapter_location_characters
end
