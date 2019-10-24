import React, { Fragment } from 'react';
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
    <Fragment>
      <div className="row mb-3">
        <div className="col-12">
          <h2 className="text-center">{drink.name}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6">
          <div className="text-center">
            <img alt={drink.name} src={drink.img_url} height="400" width="400" />
            <p><strong>Category: </strong>{drink.category} - <em>({drink.glass})</em></p><br />
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <strong>Ingredients:</strong>
          <ul>{ingredients}</ul><br />
          <strong>Instructions:</strong>
          <p>{drink.instructions}</p>
          <div onClick={()=>props.toggleLikeDrink(drink.id, ()=>{
            props.reloadDrink()
          })} style={{display: 'inline-block', cursor: 'pointer'}}>
            {
              props.drink.user_liked &&
              <i className="fas fa-heart">Click to unlike</i> ||
              <i className="far fa-heart">Click to like</i>
            }
          </div>
        </div>
      </div>
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleLikeDrink: (id,cb)=>dispatch(toggleLikeDrink(id,cb))
})

export default connect(null, mapDispatchToProps)(Drink);