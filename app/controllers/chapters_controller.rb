class ChaptersController < ApplicationController

    def show
        chapter = Chapter.find(params[:id])
        render json: chapter
    end
end
