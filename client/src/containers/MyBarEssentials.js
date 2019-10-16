import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { myBarSelector, loadDrinks } from '../actions/drinks'
import { resetMyBar } from '../actions/drinks'
import { MyBarSelector } from '../components/MyBarSelector'

class MyBarEssentials extends React.Component {

  onFilter(selector) {
    this.props.myBarSelector(selector)
  }

  handleMyBarReset(){
    this.props.resetMyBar()
  }

  generateFilters(item, i, filters) {
    let selected = filters.includes(item) ? true : false
    return (
      <MyBarSelector
        key={i}
        selected={selected}
        selector={item}
        onClick={this.onFilter.bind(this)}
      />
    )
  }

  render() {
    const filters = this.props.myBar
    // const barEssentialLiquors = this.props.barEssentials.liquors.sort().map((item, i) => this.generateFilters(item, i, filters))
    // const barEssentialLiqueurs = this.props.barEssentials.liqueurs.sort().map((item, i) => this.generateFilters(item, i, filters))
    // const barEssentialMixersGarnishes = this.props.barEssentials.mixersGarnishes.sort().map((item, i) => this.generateFilters(item, i, filters))
    return (
      <div className="center-align">
        <h4>Bar Essentials</h4>
        <br></br>
        <p><strong><input type="text" onChange={(ev)=>this.props.loadDrinks(ev.target.value)}></input></strong></p>
       
      
        <button className="btn-flat" onClick={() => this.handleMyBarReset()}><u>Reset My Bar</u></button><br /><br />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    drinks: state.drinks.drinks,
    myBar: state.drinks.myBar,
    barEssentials: state.drinks.barEssentials
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    myBarSelector: myBarSelector,
    resetMyBar: resetMyBar,
    loadDrinks: loadDrinks
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBarEssentials)