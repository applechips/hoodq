class MapDatumSerializer < ActiveModel::Serializer
  attributes :id, :address, :nearestCoffeeShop, :workDistance, :nearbyDogPark
end
