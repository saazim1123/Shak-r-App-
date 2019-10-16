import React from 'react';
import { Link } from 'react-router-dom';

export const DrinkTextCard = (props) => {
  const drink_url = `drinks/${props.drink.id}`
  return(
    <Link to={drink_url}>
      <div className="col s12 l6 xl4 ">
        <div className="">
          <div className=" black-text center-align">
            <p><strong>{props.drink.name}</strong></p>
            <p>({props.drink.category})</p>
          </div>
        </div>
      </div>
    </Link>
  )
}