class MenusController < ApplicationController

  # GET '/businesses/:business_id/menu'
  def show
    business = Business.find(params[:business_id])
    menu = business.menu
    render json: menu
  end

end
