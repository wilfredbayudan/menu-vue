class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response


  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end

  private

  def authorize
    return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
  end

  def authorize_permission
    @business = find_business
    return render json: { errors: ["Not authorized"] }, status: :unauthorized unless @business.users.find { |user| user.id == session[:user_id]}
  end

  def find_business
    Business.find(params[:business_id] || params[:id])
  end

  def find_menu
    find_business.menu
  end

  def find_category
    find_menu.categories.find(params[:category_id] || params[:id])
  end

  def find_item
    find_category.items.find(params[:item_id] || params[:id])
  end

  def render_not_found_response
    resource = self.class.name.gsub("Controller", "").singularize
    render json: { errors: ["#{resource} not found"] }, status: :not_found
  end

  def render_invalid_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
