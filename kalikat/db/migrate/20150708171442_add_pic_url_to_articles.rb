class AddPicUrlToArticles < ActiveRecord::Migration
  def change
    change_table :articles do |t|
      t.string :pic_url
    end

  end
end
