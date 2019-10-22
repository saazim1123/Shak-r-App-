import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import MyBarPage from './containers/MyBarPage'
import DrinkShow from './containers/DrinkShow'
import DrinkRandom from './containers/DrinkRandom'
import DrinksIndex from './containers/DrinksIndex'
import Landing from './containers/Landing'
import Login from './containers/Login'
import SignUp from './containers/SignUp'
import DrinksLikes from './components/DrinkLikes'

import { Navigationbar } from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

import getProfileFetch from './actions/loggedin';
import {logoutUser} from './actions/logout'

class App extends Component {

componentDidMount() {
  getProfileFetch()
}

handleClick = event => {
  event.preventDefault()
  // Remove the token from localStorage
  localStorage.removeItem("token")
  // Remove the user object from the Redux store
  this.props.logoutUser()
}



  render() {
    const isAuth = !!localStorage.getItem("token");
    return (
      <Router>
        <div>
          {this.props.site.navbar ? <Navigationbar isAuth={isAuth}/> : null}
          <div className={this.props.site.myBar ? "" : "container"}>
            <div className="col s-12">
            <Switch>
              <Route exact path ="/" component={Landing} />
              <Route exact path ="/login" component={Login} />
              <Route exact path ="/signup" component={SignUp} />
              <Route exact path ='/mybar' component={MyBarPage} />
              <Route exact path="/drinks" component={DrinksIndex} />
              <Route exact path="/drinks/random" component={DrinkRandom} />
              <Route exact path='/drinks/:id' component={DrinkShow} />
              <Route exact path='/drinks-likes' component={DrinksLikes} />
            </Switch>  
             
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
    site: state.site,
})

const mapDispatchToProps = dispatch => ({
  
  logoutUser: () => dispatch(logoutUser())
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
