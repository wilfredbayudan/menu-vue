class UsersController < ApplicationController

  before_action :authorize
  skip_before_action :authorize, only: [:create]

  ## POST '/signup'
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
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
