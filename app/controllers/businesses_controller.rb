class BusinessesController < ApplicationController

  # GET '/businesses'
  def index
    businesses = Business.all
    render json: businesses, each_serializer: BusinessSummarySerializer
  end

  # POST '/businesses'
  def create
    user = User.find(session[:user_id])
    business = user.businesses.create!(business_params)
    role = business.user_businesses.last
    role.owner = true
    role.save
    business.create_menu
    render json: business, status: :created 
  end

  # GET '/businesses/:id'
  def show
    business = find_business
    render json: business, include: ['menu', 'menu.categories', 'menu.items']
  end

  private
  
  def business_params
    params.permit(:name, :description, :image)
  end

  def find_business
    Business.find(params[:id])
  end

end
