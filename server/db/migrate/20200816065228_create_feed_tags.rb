class CreateFeedTags < ActiveRecord::Migration[5.1]
  def change
    create_table :feed_tags do |t|
      t.bigint :feed_id, null: false
      t.bigint :tag_id,  null: false

      t.timestamps
    end

    add_index :feed_tags, :feed_id
    add_index :feed_tags, :tag_id
  end
end
