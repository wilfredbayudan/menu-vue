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

  def render_not_found_response
    resource = self.class.name.gsub("Controller", "").singularize
    render json: { errors: ["#{resource} not found"] }, status: :not_found
  end

  def render_invalid_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
