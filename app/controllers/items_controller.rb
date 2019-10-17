class ItemsController < ApplicationController

    def search1
       Item.all.map{|item| item.name}
    end

   

    def index
      @items = Item.all.select("name", "id")
      render json: { items: @items} 
    end



end