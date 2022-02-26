class UsersController < ApplicationController

  before_action :authorize
  skip_before_action :authorize, only: [:create]

  ## GET / '/businesses/:business_id/users'
  def index
    if params[:business_id]
      business = Business.find(params[:business_id])
      render json: business.users, each_serializer: BusinessUserSerializer
    end
  end

  ## POST '/signup', '/businesses/:business_id/users
  def create
    ## If addding user to business
    if params[:business_id]
      user = User.find(session[:user_id])
      business = user.businesses.find(params[:business_id])
      newUser = User.find_by(email: params[:email].downcase)
      if (newUser)
        business.users << newUser
        render json: newUser, serializer: BusinessUserSerializer
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

  private

  def authorize
    super
  end

  def user_params
    params.permit(:email, :password, :password_confirmation, :first_name, :last_name)
  end
  
end
