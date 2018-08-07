class Framework < ApplicationRecord
  has_many :votes, foreign_key: 'fw_id'
end
