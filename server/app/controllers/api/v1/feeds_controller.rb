module Api
  module V1
    class FeedsController < ApplicationController
      PAGE_PAR_NUM = 24

      # index feed
      def index
        @university_id = params[:university_id]
        @page = params[:page].to_i || 1

        university = University.find(@university_id.to_i)

        total_page = university.feeds.page(@page).per(PAGE_PAR_NUM).total_pages
        @page = total_page
        feeds = university.feeds.page(@page).per(PAGE_PAR_NUM)

        render json: { status: 'success', data: { university: university,
                                                  feeds: feeds,
                                                  pageNum: @page,
                                                  totalPage: total_page }}
      end

      # create feed
      def create
        ActiveRecord::Base.transaction do
          tags = feed_params['tags'].map do |tag_label|
            Tag.find_or_create_by(label: tag_label)
          end

          university = University.find(feed_params['university_id'])
          feed = university.feeds.create!({
            name: feed_params['name'],
            title: feed_params['title'],
            content: feed_params['content'],
            tags: tags,
            session_id: @session_id
          })

          render json: { status: 'success', data: feed }
        end
      end

      def feed_params
        @feed_params ||= params.permit(:university_id, :name, :title, :content, tags: [])
      end

      # delete feed
      def destroy
        @feed = Feed.find(params[:id])

        if @feed.session_id != @session_id || @feed.university_id != params[:niversity_id].to_i
          render status: 400, json: { status: 400, message: "Feed Not Found" } if @feed.session_id != @session_id
        end

        @feed.destroy!
        render json: { status: 'success' }
      end
    end
  end
end
