class CategoriesController < ApplicationController

  def index
    business = find_business
    categories = business.menu.categories
    render json: categories
  end

  def show
    category = find_category
    render json: category
  end

  def create
    menu = find_menu
    category = menu.categories.create!(category_params)
    render json: category
  end
  

  private

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
