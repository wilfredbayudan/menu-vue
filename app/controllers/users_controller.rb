class UsersController < ApplicationController

  before_action :authorize
  skip_before_action :authorize, only: [:create, :destroy]

  ## GET / '/businesses/:business_id/users'
  def index
    if params[:business_id]
      business = Business.find(params[:business_id])
      render json: business.users, each_serializer: BusinessUserSerializer, business_id: params[:business_id]
    end
  end

  ## POST '/signup', '/businesses/:business_id/users
  def create
    ## If addding user to business
    if params[:business_id]
      user = User.find(session[:user_id])
      business = user.businesses.find(params[:business_id])
      newUser = User.find_by(email: params[:email].downcase)
      if newUser
      return render json: { errors: ["Not authorized to add user"]}, status: :unauthorized unless business.user_businesses.find_by!(user_id: session[:user_id]).owner
        business.users << newUser
        render json: newUser, serializer: BusinessUserSerializer, business_id: params[:business_id]
      else
        render json: { errors: ["Account not found! User needs to have an existing account to grant access."]}, status: :unprocessable_entity
      end
    else
      ## If signing up
      user = User.create!(user_params)
      UserMailer.with(user: user).welcome_email.deliver_later
      session[:user_id] = user.id
      render json: user, status: :created
    end
  end

  ## GET '/me'
  def show
    user = User.find(session[:user_id])
    render json: user
  end

  def destroy
    ## DELETE /businesses/:business_id/users/:id
    if params[:business_id]
      user = User.find(params[:id])
      business = Business.find(params[:business_id])
      return render json: { errors: ["Not authorized to remove user"]}, status: :unauthorized unless business.user_businesses.find_by!(user_id: session[:user_id]).owner
      business.user_businesses.find_by!(user_id: user.id).destroy
      head :no_content
    end
  end

  private

  def authorize
    super
  end

  def user_params
    params.permit(:email, :password, :password_confirmation, :first_name, :last_name)
  end
  
end
