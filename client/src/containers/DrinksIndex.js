import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CocktailImage from '../img/cocktail3.jpg';
import DrinkCardGrid from '../containers/DrinkCardGrid'
import { loadDrinks, unloadDrinks, getItems } from '../actions/drinks'

class DrinksIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drinksInfo: []
    }
  }

  componentDidMount(){
    const isAuth = !!localStorage.getItem('token');
    if (!isAuth) {
      this.props.history.replace('/')
    }
    document.querySelector('body').style.background = 'whitesmoke';
    this.props.getItems((items)=>{
      ['Tequila', 'Gin', 'Vodka', 'Whiskey'].forEach((label)=>{
        const type = items.items.find((obj)=>obj.name.toLowerCase() === label.toLowerCase());
        if (type) {
          this.props.loadDrinks(type.id, (data)=>{
            this.setState({
              drinksInfo: this.state.drinksInfo.concat({
                type:label,
                data
              })
            })
          })
        }
      })
    })
  }

  componentWillUnmount(){
    this.props.unloadDrinks()
  }
  
  render() {
    console.log(this.state)
    return (
      <div className="row">
        <div className="center-align col-12" style={{height: '100vh', background: 'url('+CocktailImage+') no-repeat'}}>
          <h4>Browse Cocktail Recipes</h4>
        </div>
        {
          this.state.drinksInfo.map((obj, id)=>{
            return (<div key={id} >
                      <h4 className="text-center mt-4 mb-2">{obj.type}</h4>
                      <div>
                        <DrinkCardGrid drinks={obj.data}/>
                      </div>
                    </div>
                   )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    drinks: state.drinks.drinks,
    items: state.drinks.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadDrinks: loadDrinks,
    unloadDrinks: unloadDrinks,
    getItems: getItems
    
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinksIndex)