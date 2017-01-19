class CreateMapData < ActiveRecord::Migration[5.0]
  def change
    create_table :map_data do |t|
      t.string :address
      t.string :nearestCoffeeShop
      t.string :workDistance
      t.string :nearbyDogPark

      t.timestamps
    end
  end
end
