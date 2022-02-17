class BusinessesController < ApplicationController

  before_action :authorize
  before_action :authorize_permission
  skip_before_action :authorize, only: [:index, :show]
  skip_before_action :authorize_permission, only: [:index, :show, :create]

  # GET '/businesses'
  def index
    businesses = Business.all
    render json: businesses, each_serializer: BusinessSummarySerializer
  end

  # GET '/businesses/:id'
  def show
    business = find_business
    render json: business, include: ['menu', 'menu.categories', 'menu.items']
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

  # PATCH '/businesses/:id'
  def update
    business = find_business
    business.update!(business_params)
    render json: business, status: :accepted
  end

  # DELETE '/businesses/:id'
  def destroy
    business = find_business
    business.destroy
    head :no_content
  end

  private

  def authorize
    super
  end

  def authorize_permission
    super
  end

  def find_business
    super
  end

  def business_params
    params.permit(:name, :description, :image)
  end

end
