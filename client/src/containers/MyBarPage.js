import React from 'react';
import DrinkCardGrid from '../containers/DrinkCardGrid'
import MyBarEssentials from '../containers/MyBarEssentials'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadMyBar } from '../actions/drinks'
import { viewMyBar } from '../actions/site'


class MyBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      drinks_request_made: false
    }
  }

  componentWillMount() {
    this.props.viewMyBar(true)
  }

  componentWillUnmount() {
    this.props.viewMyBar(false)
  }

  // LoadMyBar(barEssentials, missingEssentials) {
    
  // }

  render() {
    // let barEssentialsArray = []
    var noDrinksFound = false;
    if (this.props.drinks && this.props.drinks.length === 0){
        noDrinksFound = true;
    } else if(!this.props.drinks) {
      noDrinksFound = true;
    }
    console.log("noDrinksFound", noDrinksFound);
    console.log("drinks_request_made", this.state.drinks_request_made)
    return (
      <div className="row">
        <div className="center-align col s2">
          <MyBarEssentials toggle_drinks_request_made={()=>this.setState({
            drinks_request_made: true
          })}/>
        </div>
        <div className="center-align col s8">
          <br/>          
          {this.props.drinks !== [] ? <DrinkCardGrid drinks={this.props.drinks} /> : null}

        </div>
        {
            (noDrinksFound && this.state.drinks_request_made) &&
            <div>
                <h4 style={{float: 'left'}}> Please refine your search</h4>
            </div>
        }
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
    loadMyBar: loadMyBar,
    viewMyBar: viewMyBar
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBar)