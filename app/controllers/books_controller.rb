class BooksController < ApplicationController

    def show
        book = Book.find(params[:id])
        render json: book, include: ['chapters.chapter_location_characters', 'chapters.characters', 'chapters.locations']
    end
end
