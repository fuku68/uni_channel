module Api
  module V1
    class TagsController < ApplicationController
      def index
        tags = Tag.all.pluck(:label)
        render json: { status: 'success', data: tags }
      end
    end
  end
end
