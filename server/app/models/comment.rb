class Comment < ApplicationRecord
  belongs_to :feed

  validates :feed_id, presence: true
  validates :name, presence: true, length: { maximum: 64 }
  validates :content, presence: true, length: { maximum: 1200 }
end
