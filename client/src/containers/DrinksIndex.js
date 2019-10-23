import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CocktailImage from '../img/cocktail4.jpg';
import DrinkCardGrid from '../containers/DrinkCardGrid'
import { loadDrinks, unloadDrinks, getItems } from '../actions/drinks'
import TequilaImage from '../img/tequila.png'
import WhiskeyImage from '../img/whiskey.png'
import GinImage from '../img/gin.png'
import VodkaImage from '../img/vodka.png'

class DrinksIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drinksInfo: [],
      drinksSectionInfo: {
        tequila: {
          description: "Tequila is a succulent, native to Mexico. A handful of spirits, including tequila and mezcal, are distilled from the roasted hearts of the agave plant.",
          image: TequilaImage
        },
        whiskey: {
          description: "Scotch and Irish whisky are distilled from malted barley and grain, while North American whiskey, like bourbon, is a made from a mix of corn, rye, and other grains. Whiskeys are typically aged in charred oak barrels before bottling.",
          image: WhiskeyImage
        },
        gin: {
          description: "Gin is a neutral grain spirit that has been infused with a wide range of botanicals, from citrus peels to exotic spices, with the most dominant note being juniper.",
          image: GinImage
        },
        vodka: {
          description: "Vodka is a clear, neutral flavored spirit. It can be made from grains like wheat and rye or from root vegetables like potatoes and beets.",
          image: VodkaImage
        }
      }
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
        <div className="center-align col-12" style={{height: "60vh", overflow: "hidden"}}>
          <div style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}>
            <img src={CocktailImage} className="cocktail-recipe-background" />
          </div>
          <h1 className="cocktail-header">Cocktail Directory</h1>
        </div>
        <div className="col-12" style={{marginTop: '10vh'}}>
          {
            this.state.drinksInfo.map((obj, id)=>{
              return (<div key={id} style={{margin:"auto", textAlign:"center"}} >
                        <img className="cocktail-icon" src={this.state.drinksSectionInfo[obj.type.toLowerCase()].image} />
                        <div className="description-div"> 
                        <h4 className="title-text-center mt-4 mb-2">{obj.type}</h4>
                        <p className="description-text-center" style={{textAlign:"center",whiteSpace:"pre-wrap"}}> {
                          this.state.drinksSectionInfo[obj.type.toLowerCase()].description
                        } </p>
                        </div>
                        <div>
                          
                            <DrinkCardGrid drinks={obj.data} hideGlasstile drinkClass="col-sm-2"/>
                          
                        </div>
                      </div>
                     )
            })
          }
        </div>
      </div>
    )
  }
}

// style={{position: "absolute", left: "23vw", zIndex: "99", top: "18.3rem", fontWeight: "700", fontSize: "3.6rem", color: "green"}}

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