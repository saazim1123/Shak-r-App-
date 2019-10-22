import React, {Fragment} from 'react';
import DrinkCardGrid from '../containers/DrinkCardGrid'
import MyBarEssentials from '../containers/MyBarEssentials'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadMyBar, loadDrinks } from '../actions/drinks'
import { viewMyBar } from '../actions/site'


class MyBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      drinks_request_made: false
    }
    this.loadDrinks = this.loadDrinks.bind(this);
  }

  componentWillMount() {
    const isAuth = !!localStorage.getItem('token');
    if (!isAuth) {
      this.props.history.replace('/')
    }
    document.querySelector('body').style.background = 'whitesmoke';
    this.props.viewMyBar(true)
  }

  componentWillUnmount() {
    this.props.viewMyBar(false)
  }

  loadDrinks(items) {
    this.props.loadDrinks(items, ()=>{
      this.setState({
        drinks_request_made: true
      })
    })
  }

  render() {
    // let barEssentialsArray = []
    console.log(this.props.drinks)
    var noDrinksFound = false;
    if (this.props.drinks && this.props.drinks.length === 0){
        noDrinksFound = true;
    } else if(!this.props.drinks) {
      noDrinksFound = true;
    }
    return (
      <Fragment>
        <div className="row">
          <div className="center-align col-12">
            <MyBarEssentials loadDrinks={this.loadDrinks} resetRequestMade={()=>this.setState({
              drinks_request_made: false
            })}/>
          </div>
        </div>
        <div className="row">
          {
            !noDrinksFound && 
            <DrinkCardGrid drinks={this.props.drinks} />
            ||
              <div className='col-12 text-center'>
                {
                  this.state.drinks_request_made &&  <h4 style={{'color': 'gray','fontStyle': 'italic', 'width': '2em'}}> <br></br>Please refine your search</h4> || <h4 style={{'color': 'gray','fontStyle': 'italic'}}>Welcome to Shakr. <br></br><br></br>
                  Please use the search bar to select which ingredients you would like to make cocktails with.
                  </h4>
                }
              </div>
          }
        </div>
      </Fragment>
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
    loadMyBar: loadMyBar,
    loadDrinks: loadDrinks,
    viewMyBar: viewMyBar
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBar)