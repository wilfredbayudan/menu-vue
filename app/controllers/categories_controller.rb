class CategoriesController < ApplicationController

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    business = find_business
    categories = business.menu.categories
    render json: categories
  end

  def show
    category = find_category
    render json: category
  end
  

  private

  def find_business
    Business.find(params[:business_id])
  end

  def find_category
    Category.find(params[:id])
  end

  def render_not_found_response
    render json: { error: "Category not found" }, status: :not_found
  end

end
