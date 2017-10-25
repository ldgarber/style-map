class AddNumSeasonsToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :num_seasons, :integer
  end
end
