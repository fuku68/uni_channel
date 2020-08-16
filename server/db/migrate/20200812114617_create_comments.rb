class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.bigint :feed_id
      t.string :name
      t.text :content
      t.string :session_id

      t.timestamps
    end
  end
end
