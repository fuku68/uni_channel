module Api
  module V1
    class FeedsController < ApplicationController
      def index
        @university_id = params[:university_id]
        @page = params[:id].to_i || 1

        university = University.find(@university_id.to_i)
        feeds = university.feeds.page(@page).per(20)

        render json: { status: 'success', data: { university: university, feeds: feeds }}
      end

      def show
      end

      def create
        @university_id = params[:university_id]
      end
    end
  end
end
