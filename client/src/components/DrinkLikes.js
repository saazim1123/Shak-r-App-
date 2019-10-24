import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getLikedDrinks } from '../actions/drinks' 
import DrinkCardGrid from '../containers/DrinkCardGrid';

class DrinkLikes extends Component {
    componentDidMount(){
      const isAuth = !!localStorage.getItem('token');
      if (!isAuth) {
        this.props.history.replace('/')
      }
      document.querySelector('body').style.background = 'whitesmoke';
      this.props.getLikedDrinks()
    }

    render() {
      return <div>
                <h3 className="text-center mt-4 mb-5">Liked Collection</h3>
              {
                this.props.drinks && <DrinkCardGrid drinks={this.props.drinks} hideGlasstile additionalClasses={['drinkLikesModification']}/>
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