class CategoriesController < ApplicationController

  before_action :authorize
  skip_before_action :authorize, only: [:index, :show]

  # GET '/businesses/:business_id/menu/categories'
  def index
    business = find_business
    categories = business.menu.categories
    render json: categories
  end

  # GET '/businesses/:business_id/menu/categories/:id'
  def show
    category = find_category
    render json: category
  end

  # POST '/businesses/:business_id/menu/categories'
  def create
    menu = find_menu
    category = menu.categories.create!(category_params)
    render json: category
  end
  

  private

  def authorize
    super
  end

  def find_business
    Business.find(params[:business_id])
  end

  def find_menu
    find_business.menu
  end

  def find_category
    Category.find(params[:id])
  end

  def category_params
    params.permit(:name, :description)
  end

end
