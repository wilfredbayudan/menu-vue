class CategoriesController < ApplicationController

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

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

  def render_not_found_response
    render json: { errors: ["Category not found"] }, status: :not_found
  end

  def render_invalid_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
