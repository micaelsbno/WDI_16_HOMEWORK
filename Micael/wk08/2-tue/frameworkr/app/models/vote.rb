class Vote < ApplicationRecord
  belongs_to :framework, foreign_key: 'fw_id'
end
