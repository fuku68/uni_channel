class Feed < ApplicationRecord
  belongs_to :university
  has_many :feed_tags
  has_many :tags, through: :feed_tags
  has_many :comments, dependent: :destroy
end
