import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {MultiSelect} from 'react-selectize';

import { myBarSelector, loadDrinks, getItems } from '../actions/drinks'
import { resetMyBar } from '../actions/drinks'
import { MyBarSelector } from '../components/MyBarSelector'




class MyBarEssentials extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selected_ingredients: []
    }
    this.loadDrinks = this.loadDrinks.bind(this)
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

  loadDrinks(id) {
    var item = this.props.items.items.find((obj)=>obj.id === parseInt(id));
    this.props.loadDrinks(item.name)
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
        <div className="center-align">
          <h4>Bar Essentials</h4>
          <br></br>
          {/* <p><strong>
              {
                !!this.props.items &&
                <select onChange={(e)=>this.loadDrinks(e.target.value)} style={{display: 'block'}}>
                  {
                    this.props.items.items.map((obj)=>{
                      return <option value={obj.id}>{obj.name}</option>
                    })
                  }
              </select>
              }
          </strong></p> */}
      
          <MultiSelect
            placeholder = "Enter your Ingredients"
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
              onClick={()=>{
                if (this.state.selected_ingredients) {
                  this.props.toggle_drinks_request_made();
                  this.props.loadDrinks(this.state.selected_ingredients.map((obj)=> obj.value).join(','))
                }
              }}>
              What can I make?
          </button>
         

       
          
             
          
              
          
         

        
        

          
        
        
          <button className="btn-flat" onClick={() => this.handleMyBarReset()}><u>Reset My Bar</u></button><br /><br />
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
    loadDrinks: loadDrinks,
    getItems: getItems
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBarEssentials)