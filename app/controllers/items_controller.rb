class ItemsController < ApplicationController

  before_action :authorize_permission
  skip_before_action :authorize_permission, only: [:index, :show]

  # GET '/businesses/:business_id/menus/categories/:category_id/items
  def index
    items = find_category.items
    render json: items
  end

  # GET '/businesses/:business_id/menus/categories/:category_id/items/:id
  def show
    item = find_item
    render json: item
  end

  # POST '/businesses/:business_id/menus/categories/:category_id/items
  def create
    item = find_category.items.create(item_params)
    render json: item, status: :created
  end

  # PATCH '/businesses/:business_id/menus/categories/:category_id/items/:id
  def update
    item = find_item
    item.update(item_params)
    render json: item, status: :accepted
  end

  # DELETE '/businesses/:business_id/menus/categories/:category_id/items/:id
  def destroy
    item = find_item
    item.destroy
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

  def find_item
    find_category.items.find(params[:id])
  end

  def item_params
    params.permit(:name, :description, :image, :price)
  end

end
