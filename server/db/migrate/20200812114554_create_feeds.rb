class CreateFeeds < ActiveRecord::Migration[5.1]
  def change
    create_table :feeds do |t|
      t.bigint :university_id
      t.string :name
      t.text :content
      t.string :session_id

      t.timestamps
    end
  end
end
