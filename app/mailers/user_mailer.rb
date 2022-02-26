class UserMailer < ApplicationMailer
  default from: "no-reply@menuvue.com"

  def welcome_email
    @user = params[:user]
    @url = 'http://www.menuvue.com/login'
    mail(to: @user.email, subject: 'Welcome to Menu Vue!')
  end

end
