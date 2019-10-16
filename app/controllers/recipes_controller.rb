class RecipesController < ApplicationController
  def index
    query = params[:query];
    #byebug
    if query.present?
      item_ids = Item.where("name like ? ", "%#{query}%").pluck(:id)
      recipe_ids = Ingredient.where(item_id: item_ids).pluck(:recipe_id)
      @recipes = Recipe.where(id: recipe_ids)
      render json: @recipes
    else
      @recipes = Recipe.all
      render json: @recipes
    end
  end

  def show
    @recipe = Recipe.find(params[:id])
    render json: @recipe
  end
end