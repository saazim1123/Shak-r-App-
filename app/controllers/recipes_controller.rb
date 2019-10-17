class RecipesController < ApplicationController
  # def index 
  #   query = params[:query];
  #   # expected query to be csv
  #   if query
  #     byebug
  #     item_ids = Item.where( "lower(name) IN (?)", query.split(",").map(&:downcase) ).select('id')
  #     recipe_ids = Ingredient.where({item_id: item_ids}).select('recipe_id');
  #     @recipes = Recipe.where({id: recipe_ids})
  #     render json: @recipes
  #   else
  #     @recipes = Recipe.all
  #     render json: @recipes
  #   end
  # end

  def index
    query = params[:query];
    # expected query to be csv
    if query
      query_array = query.split(",").map(&:downcase)
      item_ids = Item.where( "lower(name) IN (?)", query_array ).select('id')
      ingredients = Ingredient.where({item_id: item_ids})
      ingredient_map = ingredients.group_by { |obj| obj.recipe_id }
      recipe_ids = [];
      ingredient_map.each do |ingreObj| 
        if (ingreObj[1].length == query_array.length)
          recipe_ids.push(ingreObj[0])
        end
      end
      @recipes = Recipe.where({id: recipe_ids})
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