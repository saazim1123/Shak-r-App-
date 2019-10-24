import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Drink  from '../components/Drink'
import { loadRandomDrink, loadDrink, unloadDrink} from '../actions/drinks'

class DrinkRandom extends React.Component {
 
  handleOnClick = () => {
    this.props.loadRandomDrink()
  }

  componentWillMount() {
    const isAuth = !!localStorage.getItem('token');
    if (!isAuth) {
      this.props.history.replace('/')
    }
  }

  componentWillUnmount() {
    this.props.unloadDrink()
  }

  componentDidMount() {
    this.props.loadRandomDrink()
  }

  reloadDrink(){
    this.props.loadDrink(this.props.drink.drink.id)
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className='col-12 text-center'>
            <h5>Random Cocktails</h5>
            <h6>A Nice Description</h6><br/>
            <button className="waves-effect waves-light btn" onClick={this.handleOnClick}>Random Drink</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {
              this.props.drink && <Drink drink={this.props.drink} reloadDrink={()=>{this.reloadDrink()}}/>
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    drink: state.drinks.drink
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadRandomDrink: loadRandomDrink,
    unloadDrink: unloadDrink,
    loadDrink: loadDrink
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkRandom)