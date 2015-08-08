class UsersController < ApplicationController
  before_action :authenticate_request, only: [:update, :profile_info]
  def index
    users = User.all.count
    render json: users
  end

  # def create
  #   @user = User.new(username: "test", password: "test")
  #   if @user.save
  #     users = User.all.count
  #     render json: users
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  def update
    @current_user.update_attributes(info_params)
    render json: {message: "success"}
  end

  def profile_info
    info = {risk_preference: @current_user.risk_preference,
            age: @current_user.age}

    render json: info
  end

  private
    def info_params
      params.require(:info).permit(:risk_preference, :age)
    end

end