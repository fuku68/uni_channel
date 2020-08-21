module Api
  module V1
    class UniversitiesController < ApplicationController
      def index
        universities = University.all
        render json: { status: 'success', data: universities.map{ |u| UniversitySerializer.new(u) } }
      end
    end
  end
end
