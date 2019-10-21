import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

export const DrinkImageCard = (props) => {

  const drink_url = `/drinks/${props.drink.id}`

  return(
    <div className="col s3">
      <div className="card">
        <Link to={drink_url}>
          <span>
            <Image src={props.drink.img_url} alt={props.drink.name} fluid/>
          </span>
        </Link>
      </div>
      
    </div>
  )

}

