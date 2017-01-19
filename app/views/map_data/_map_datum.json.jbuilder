json.extract! map_datum, :id, :address, :nearestCoffeeShop, :workDistance, :nearbyDogPark, :created_at, :updated_at
json.url map_datum_url(map_datum, format: :json)