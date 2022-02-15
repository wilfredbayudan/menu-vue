class BusinessesController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  ## GET '/businesses'
  def index
    businesses = Business.all
    render json: businesses
  end

  ## POST '/businesses'
  def create
    user = User.find(session[:user_id])
    business = user.create_business(business_params)
    if business.valid?
      render json: business, status: :created
    else
      render json: { errors: business.errors.full_messages }, status: :unprocessable_entity
    end
  end

  ## GET '/businesses/:id'
  def show
    business = find_business
    if business
      render json: business
    else
      render json: { errors: ['e']}
    end
  end

  private
  
  def business_params
    params.permit(:name, :description)
  end

  def find_business
    Business.find(params[:id])
  end

  def render_not_found_response
    render json: { error: "Business not found " }, status: :not_found
  end

end
