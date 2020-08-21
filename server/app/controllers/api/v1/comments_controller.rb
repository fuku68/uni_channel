module Api
  module V1
    class CommentsController < ApplicationController
      PAGE_PAR_NUM = 50

      # index commrnts
      def index
        @university_id = params[:university_id]
        @feed_id = params[:feed_id]
        @page = params[:page].to_i || 1

        feed = Feed.find(@feed_id.to_i)
        render status: 400, json: { status: 400, message: "Feed Not Found" } if feed.university_id != @university_id.to_i

        total_page = feed.comments.page(@page).per(PAGE_PAR_NUM).total_pages
        @page = total_page
        comments= feed.comments.page(@page).per(PAGE_PAR_NUM)

        render json: { status: 'success', data: { university: UniversitySerializer.new(feed.university),
                                                  feed: FeedSerializer.new(feed),
                                                  comments: comments.map{ |c| CommentSerializer.new(c) },
                                                  pageNum: @page,
                                                  totalPage: total_page }}
      end

      # create commrnt
      def create
        feed = Feed.find(comment_params['feed_id'])
        render status: 400, json: { status: 400, message: "Feed Not Found" } if feed.university_id != comment_params['university_id'].to_i

        comment = feed.comments.create!({
          name: comment_params['name'],
          content: comment_params['content'],
          session_id: @session_id
        })

        render json: { status: 'success', data: comment }
      end

      def comment_params
        @comment_params ||= params.permit(:university_id, :feed_id, :name, :content)
      end

      # delete comment
      def destroy
        comment = Comment.find(params[:id])
        if comment.session_id != @session_id  || comment.feed.id != params[:feed_id].to_i || comment.feed.university.id || params[:university_id].to_i
          ender status: 400, json: { status: 400, message: "Comment Not Found" } if @feed.session_id != @session_id
        end

        comment.destroy!
        render json: { status: 'success' }
      end
    end
  end
end
