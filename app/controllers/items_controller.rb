class ItemsController < ApplicationController

  # GET '/businesses/:business_id/menus/categories/:category_id/items
  def index

  end

  # GET '/businesses/:business_id/menus/categories/:category_id/items/:id
  def show

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

  def item_params
    params.permit(:name, :description, :image, :price)
  end

end
