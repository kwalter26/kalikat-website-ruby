class Article < ActiveRecord::Base
  validates :title, :post, presence: true
  validates :title, uniqueness: true
end
