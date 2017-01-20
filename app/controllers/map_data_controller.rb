class MapDataController < ApplicationController
  require 'json'

  def index
    file = File.read('config/addresses.json')
    @data_hash = JSON.parse(file)
    @json = @data_hash["locations"]
  end

  # GET /map_data/1
  # GET /map_data/1.json
  def show

  end

  # GET /map_data/new
  def new
    
  end

  # GET /map_data/1/edit
  def edit
  end

  # POST /map_data
  # POST /map_data.json
  def create
    @map_datum = MapDatum.new(map_datum_params)

    respond_to do |format|
      if @map_datum.save
        format.html { redirect_to @map_datum, notice: 'Map datum was successfully created.' }
        format.json { render :show, status: :created, location: @map_datum }
      else
        format.html { render :new }
        format.json { render json: @map_datum.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /map_data/1
  # PATCH/PUT /map_data/1.json
  def update
    respond_to do |format|
      if @map_datum.update(map_datum_params)
        format.html { redirect_to @map_datum, notice: 'Map datum was successfully updated.' }
        format.json { render :show, status: :ok, location: @map_datum }
      else
        format.html { render :edit }
        format.json { render json: @map_datum.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /map_data/1
  # DELETE /map_data/1.json
  def destroy
    @map_datum.destroy
    respond_to do |format|
      format.html { redirect_to map_data_url, notice: 'Map datum was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_map_datum
      @map_datum = MapDatum.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def map_datum_params
      params.require(:map_datum).permit(:address, :nearestCoffeeShop, :workDistance, :nearbyDogPark)
    end
end
