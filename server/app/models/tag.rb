class Tag < ApplicationRecord
  has_many :feed_tags
  has_many :tfeeds, through: :feed_tags
end
