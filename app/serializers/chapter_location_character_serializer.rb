class ChapterLocationCharacterSerializer < ActiveModel::Serializer
  attributes :id, :summary

  belongs_to :book
  belongs_to :character
  belongs_to :location
end
