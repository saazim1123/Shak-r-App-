class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token({ user_id: @user.id })
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { error: @user.errors.full_messages.join(',') }, status: :not_acceptable
    end
  end

  def toggle_likes
    # byebug
    user_id = current_user.id
    recipe_id = params[:recipe_id]
    user_drink = UserDrink.where({
      recipe_id: params[:recipe_id],
      user_id: user_id
    })
    if user_drink.present?
      user_drink.destroy_all()
    else
      UserDrink.create({
        user_id: user_id,
        recipe_id: recipe_id
      })
    end
    render json: { message: 'Action Successful' } 
  end



  def likes 
    userDrinks = UserDrink.where({
       user_id: current_user.id
     })
    #  byebug
     recipes = Recipe.where({
       id: userDrinks.map(&:recipe_id).uniq
     })
     render json: recipes
  end


  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end