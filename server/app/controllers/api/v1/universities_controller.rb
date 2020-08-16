module Api
  module V1
    class UniversitiesController < ApplicationController
      def index
        universities = University.all
        render json: { status: 'success', data: universities }
      end
    end
  end
end
