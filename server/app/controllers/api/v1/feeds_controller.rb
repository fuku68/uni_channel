module Api
  module V1
    class FeedsController < ApplicationController
      def index
        @university_id = params[:university_id]
        @page = params[:page].to_i || 1

        university = University.find(@university_id.to_i)
        feeds = university.feeds.page(@page).per(20)
        total_page = university.feeds.page(@page).per(20).total_pages

        render json: { status: 'success', data: { university: university,
                                                  feeds: feeds,
                                                  pageNum: @page,
                                                  totalPage: total_page }}
      end

      def show
      end

      def create
        @university_id = params[:university_id]
      end
    end
  end
end
