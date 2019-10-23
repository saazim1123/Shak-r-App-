import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import  Drink  from '../components/Drink'
import { loadDrink } from '../actions/drinks'
import { unloadDrink } from '../actions/drinks'

class DrinkShow extends React.Component {

  componentWillMount() {
    const isAuth = !!localStorage.getItem('token');
    if (!isAuth) {
      this.props.history.replace('/')
    }
    document.querySelector('body').style.background = 'whitesmoke';
  }
 
  componentDidMount(){
    this.props.loadDrink(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.unloadDrink()
  }

  reloadDrink() {
    this.props.loadDrink(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        {this.props.drink !== '' ? <Drink reloadDrink={()=>this.reloadDrink()} drink={this.props.drink} /> : null}
      </div>
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
    loadDrink: loadDrink,
    unloadDrink: unloadDrink
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkShow)