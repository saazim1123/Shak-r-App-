import React from 'react';
import { connect } from 'react-redux';
import {toggleLikeDrink} from '../actions/drinks'

const Drink = (props) => {
  const ingredients = props.drink.ingredients.map((ingredient, i) => {
    return <li key={i}>{ingredient.quantity} {ingredient.item.name}</li>
  })

  return (
    <div className="row">
      <div className="col s12">
        <h2 className="center-align">{props.drink.name}</h2><br/>
        <div className="col s6 center-align" >
          <img alt={props.drink.name} src={props.drink.img_url} height="400" width="400" />
        </div>
        <div className="col s6">
          <br />
          <p><strong>Category: </strong>{props.drink.category} - <em>({props.drink.glass})</em></p><br />
          <strong>Ingredients:</strong>
          <ul>{ingredients}</ul><br />
          <strong>Instructions:</strong>
          <p>{props.drink.instructions}</p>
        </div>
        <button onClick={props.toggleLikeDrink.bind(this, props.drink.id)}>Like</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleLikeDrink: (id)=>dispatch(toggleLikeDrink(id))
})

export default connect(null, mapDispatchToProps)(Drink);