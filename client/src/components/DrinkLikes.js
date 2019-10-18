import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getLikedDrinks } from '../actions/drinks' 

class DrinkLikes extends Component {
    componentDidMount(){
        this.props.getLikedDrinks()
    }

    render() {
      return <div>
              {
                this.props.drinks && this.props.drinks.map((obj)=>{
                  return <h4>{obj.name}</h4>
                })
              }
             </div>
    }
}

const mapStateToProps = (state) => ({
    drinks: state.drinks.liked_drinks,
})

const mapDispatchToProps = dispatch => ({
    getLikedDrinks: () => dispatch(getLikedDrinks())
})

export default connect(mapStateToProps, mapDispatchToProps)(DrinkLikes);