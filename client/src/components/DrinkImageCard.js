import React from 'react';
import { Link } from 'react-router-dom';

export const DrinkImageCard = (props) => {

  const drink_url = `/drinks/${props.drink.id}`

  return(
    <div className="col s3">
      <div className="card">
        <Link to={drink_url}>
          <span>
            <img className="responsive-img" src={props.drink.img_url} alt={props.drink.name}/>
          </span>
        </Link>
      </div>
      
    </div>
  )

}