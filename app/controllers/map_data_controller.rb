class MapDataController < ApplicationController
  require 'json'

  def index
    file = File.read('config/addresses.json')
    @data_hash = JSON.parse(file)
    @json = @data_hash["locations"]

    @test = @data_hash["locations"][0].values

    # if .save
    #   redirect_to new_map_datum_path()
    # end

    # render json: @test
  end

  # POST /map_data/new
  def create
    @address_1 = params['/map_data']['address_1']
    @address_2 = params['/map_data']['address_2']
    # binding.pry


    # file = File.read('config/addresses.json')
    # @data_hash = JSON.parse(file)
    # @json = @data_hash["locations"]
    # @test = @data_hash["locations"][0].values
    # redirect_to new_map_datum_path
  end

  def new

    file = File.read('config/addresses.json')
    @data_hash = JSON.parse(file)
    @json = @data_hash["locations"]
    # @data_hash["locations"].select {|x| x['id']==''}.first['number']d dd
  end

end
