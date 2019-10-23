import React from 'react';
import { connect } from 'react-redux';
import {toggleLikeDrink} from '../actions/drinks'

const Drink = (props) => {
  var drink = props.drink.drink;
  if (!props.drink.drink) {
    drink = {}
  }
  const ingredients = drink.ingredients ? drink.ingredients.map((ingredient, i) => {
    return <li key={i}>{ingredient.quantity} {ingredient.item.name}</li>
  }) : <li></li>; 

  return (
    <div className="row">
      <div className="col s12">
        <h2 className="center-align">{drink.name}</h2><br/>
        <div className="col s6 center-align" >
          <img alt={drink.name} src={drink.img_url} height="400" width="400" />
        </div>
        <div className="col s6">
          <br />
          <p><strong>Category: </strong>{drink.category} - <em>({drink.glass})</em></p><br />
          <strong>Ingredients:</strong>
          <ul>{ingredients}</ul><br />
          <strong>Instructions:</strong>
          <p>{drink.instructions}</p>
        </div>
        <div onClick={()=>props.toggleLikeDrink(drink.id, ()=>{
          props.reloadDrink()
        })} style={{display: 'inline-block', cursor: 'pointer'}}>
          {
            props.drink.user_liked &&
            <i className="fas fa-heart"></i> ||
            <i className="far fa-heart"></i>
          }
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleLikeDrink: (id,cb)=>dispatch(toggleLikeDrink(id,cb))
})

export default connect(null, mapDispatchToProps)(Drink);