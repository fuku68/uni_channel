class FeedSerializer < ActiveModel::Serializer
  attributes :id, :name, :title, :content, :created_at, :tags

  # has_many :tags
  def tags
    object.tags.map { |tag| tag.label }
  end
end
