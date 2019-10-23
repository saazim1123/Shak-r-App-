import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {MultiSelect} from 'react-selectize';

import { myBarSelector, getItems } from '../actions/drinks'
import { resetMyBar } from '../actions/drinks'
import { MyBarSelector } from '../components/MyBarSelector'



class MyBarEssentials extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selected_ingredients: []
    }
  }

  state = {
    searchTerm: ''
  }

  onFilter(selector) {
    this.props.myBarSelector(selector)
  }

 componentDidMount() {
   this.props.getItems()
 }
 

  handleMyBarReset(){
    this.props.resetMyBar();
    this.setState({
      selected_ingredients: []
    })
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


  handleChange = () => {
    debugger
  }
  

    render() {
      const filters = this.props.myBar
      
      // const barEssentialLiquors = this.props.barEssentials.liquors.sort().map((item, i) => this.generateFilters(item, i, filters))
      // const barEssentialLiqueurs = this.props.barEssentials.liqueurs.sort().map((item, i) => this.generateFilters(item, i, filters))
      // const barEssentialMixersGarnishes = this.props.barEssentials.mixersGarnishes.sort().map((item, i) => this.generateFilters(item, i, filters))
      
      return (
        <div className="text-center mt-5 container-fluid">
          <h1>Bar Essentials</h1>
          <br></br>
          <div className='row'>
            <div className='col-12' style={{textAlign: 'center'}}>
              <MultiSelect
                style={{margin: 'auto'}}
                placeholder = "Enter your Ingredients"
                className="items-dropdown mb-4"
                options = {!!this.props.items && this.props.items.items.map((obj) => {
                  // debugger 
                  return ({label: obj.name, value: obj.id})
                })}
                onValuesChange = {(values)=>{
                  this.setState({selected_ingredients: values})
                }}
                values={this.state.selected_ingredients}
              />   
              <button
                style={{margin:"2%"}}
                className="submit-btn"
                onClick={()=>{
                  if (this.state.selected_ingredients) {
                    this.props.loadDrinks(this.state.selected_ingredients.map((obj)=> obj.value).join(','))
                  }
                }}>
                What can I make?
              </button>
              <button className="submit-btn" onClick={() => {
                this.handleMyBarReset();
                this.props.resetRequestMade();
              }}><u>Reset My Bar</u></button><br /><br />
            </div>
          </div>

        {/* "Lemon acid meth"

        searchTerm.split(' ') =>
        [1, 2, 3, 4, 5]
        searchTerm1: array[0]
           */}
        </div>
      )
    }
  
}

const mapStateToProps = (state) => {
  return {
    drinks: state.drinks.drinks,
    items: state.drinks.items,
    myBar: state.drinks.myBar,
    barEssentials: state.drinks.barEssentials
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    myBarSelector: myBarSelector,
    resetMyBar: resetMyBar,
    getItems: getItems
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBarEssentials)