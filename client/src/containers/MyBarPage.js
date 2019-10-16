import React from 'react';
import DrinkCardGrid from '../containers/DrinkCardGrid'
import MyBarEssentials from '../containers/MyBarEssentials'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadMyBar } from '../actions/drinks'
import { viewMyBar } from '../actions/site'


class MyBar extends React.Component {

  componentWillMount() {
    this.props.viewMyBar(true)
  }

  componentWillUnmount() {
    this.props.viewMyBar(false)
  }

  LoadMyBar(barEssentials, missingEssentials) {
    
  }

  render() {
    let barEssentialsArray = []
    
    return (
      <div className="row">
        <div className="center-align col s2">
          <MyBarEssentials />
        </div>
        <div className="center-align col s8">
          <br/>
          <button className="">What can I make?</button>
          
          {this.props.drinks !== [] ? <DrinkCardGrid drinks={this.props.drinks} /> : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadMyBar: loadMyBar,
    viewMyBar: viewMyBar
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBar)