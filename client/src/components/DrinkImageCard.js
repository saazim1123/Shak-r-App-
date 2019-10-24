import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

export const DrinkImageCard = (props) => {

  const drink_url = `/drinks/${props.drink.id}`

  return(
      <div className="card1" style={{padding: '3vw', margin: "2vw"}}>
        <Link to={drink_url} className="drinkImageCard">
          <span>
            <Image src={props.drink.img_url} alt={props.drink.name} fluid/>
          </span>
          <p style={{textAlign: 'center', marginTop: '1rem'}}>{props.drink.name}</p>
        </Link>
      </div>
  )

}

