class LocationsController < ApplicationController

  ## GET '/locations' or '/businesses/:id/locations'
  def index
    if params[:id]
      business = Business.find(params[:id])
      locations = business.locations
    else
      locations = Location.all
    end
    render json: locations
  end

  ## POST '/businesses/:id/locations'
  def create
    business = Business.find(params[:id])
    location = business.locations.create(location_params)
    if location.valid?
      render json: location, status: :created
    else
      render json: { errors: location.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  private

  def location_params
    params.permit(:name, :address)
  end

end
