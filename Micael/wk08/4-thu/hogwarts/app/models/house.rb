class House < ApplicationRecord
  has_many :students, foreign_key: 'house_id'
end
