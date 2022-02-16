class MenusController < ApplicationController

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  # GET '/businesses/:business_id/menu'
  def show
    business = Business.find(params[:business_id])
    menu = business.menu
    render json: menu
  end

  private

  def render_not_found_response
    render json: { error: "Menu not found" }, status: :not_found
  end

end
