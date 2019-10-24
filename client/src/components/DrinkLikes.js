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
                  <div className="liked-drinks-main-div">
                    <h3 className="liked-drinks-title">Liked Collection</h3>
                    <h6 className="liked-cocktail-description">Each recipe has been tested and the stories accompanying each drink represents the most accurate—and delightful—history of the cocktail. </h6><br/>
                  </div>
                  <div className="liked-drinks-collection">
                    {
                      this.props.drinks && <DrinkCardGrid drinks={this.props.drinks} hideGlasstile additionalClasses={['drinkLikesModification']}/>
                    }
                  </div>
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