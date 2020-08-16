class University < ApplicationRecord
  has_many :feeds, dependent: :destroy
end
