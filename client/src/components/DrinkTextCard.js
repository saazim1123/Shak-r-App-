import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const DrinkTextCard = (props) => {
  const drink_url = `drinks/${props.drink.id}`
  return(
    <Link to={drink_url}>
      <div className="">
        <div className="col s12 l4 xl4 ">
          <div className=" black-text center-align">
            <Container>
              <Row>
                <Image src={props.drink.img_url} alt={props.drink.name} fluid roundedCircle />
              </Row>
            </Container>
            <p><strong>{props.drink.name}</strong></p>
            {
              !props.hideGlasstile && <p>({props.drink.category})</p>
            }
            
          </div>
        </div>
      </div>
    </Link>
  )
}


{/* <img className="responsive-img" src={props.drink.img_url} alt={props.drink.name}/> */}