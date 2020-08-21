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
        @feed = Feed.new({
          university_id: feed_params['university_id'],
          name: feed_params['name'],
          title: feed_params['title'],
          content: feed_params['content'],
          session_id: @session_id
        })
        @feed.save!
      end

      def feed_params
        @feed_params ||= params.permit(:university_id, :name, :title, :content, tags: [])
      end
    end
  end
end
