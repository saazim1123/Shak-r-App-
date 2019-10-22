import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DrinkCardGrid from '../containers/DrinkCardGrid'
import { loadDrinks } from '../actions/drinks'
import { unloadDrinks } from '../actions/drinks'


class DrinksIndex extends React.Component {



  componentDidMount(){
    const isAuth = !!localStorage.getItem('token');
    if (!isAuth) {
      this.props.history.replace('/')
    }
    document.querySelector('body').style.background = 'whitesmoke';
    this.props.loadDrinks()
  }

  componentWillUnmount(){
    this.props.unloadDrinks()
  }
  
  render() {
    return (
      <div className="row">
        <div className="center-align">
          <h4>Browse Cocktail Recipes</h4>
         
        </div>
        {this.props.drinks !== [] ? <DrinkCardGrid/> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    drinks: state.drinks.drinks
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadDrinks: loadDrinks,
    unloadDrinks: unloadDrinks,
    
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinksIndex)