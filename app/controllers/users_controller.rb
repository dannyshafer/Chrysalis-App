class UsersController < ApplicationController

  def index
    users = User.all.count
    render json: users
  end

  def create
      @user = User.new(username: "test", password: "test")
      if @user.save
        users = User.all.count
        render json: users
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end
end