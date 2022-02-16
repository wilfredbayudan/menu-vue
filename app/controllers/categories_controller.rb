class CategoriesController < ApplicationController

  before_action :authorize_permission
  skip_before_action :authorize_permission, only: [:index, :show]

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

  # PATCH '/businesses/:business_id/menu/categories/:id
  def update
    category = find_category
    category.update(category_params)
    render json: category, status: :accepted
  end
  
  # DELETE '/businesses/:business_id/menu/categories/:id
  def destroy
    category = find_category
    category.destroy
    head :no_content
  end

  private

  def authorize_permission
    super
  end

  def find_business
    super
  end

  def find_menu
    super
  end

  def find_category
    super
  end

  def category_params
    params.permit(:category, :description)
  end

end
