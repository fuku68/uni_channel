class Feed < ApplicationRecord
  belongs_to :university
  has_many :feed_tags
  has_many :tags, through: :feed_tags
  has_many :comments, dependent: :destroy

  validates :university_id, presence: true
  validates :title, presence: true, length: { maximum: 64 }
  validates :name, presence: true, length: { maximum: 64 }
  validates :content, presence: true, length: { maximum: 1200 }
end
