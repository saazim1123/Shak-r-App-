import React, {Fragment} from 'react';
import { DrinkTextCard } from '../components/DrinkTextCard'
import { DrinkImageCard } from '../components/DrinkImageCard'
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DrinkCardGrid extends React.Component {

  sortByName = (a, b) => {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }
  
  render(){
    var drinksChunks =  _.chunk(this.props.drinks.sort(this.sortByName), [3]);
    if (this.props.drinkClass && this.props.drinkClass=='col-sm-2') {
      drinksChunks = _.chunk(this.props.drinks.sort(this.sortByName), [6])
    }

    return (
      <div className="container">
        {
          (this.props.drinks.length > 0) &&
            drinksChunks.map((drinksRow, i)=>{
              return <div className="row" key={i}>
                  {
                    drinksRow.map((drink, j)=>{
                      return <div className={`col-12 ${this.props.drinkClass || "col-sm-4"}`} key={j}>
                        {
                          !!this.props.site.myBar &&
                          <DrinkImageCard drink={drink} /> ||
                          <DrinkTextCard drink={drink}  hideGlasstile={!!this.props.hideGlasstile}/>
                        }
                      </div>
                    })
                  }
                </div>
            })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // drinks: state.drinks.drinks,
    site: state.site
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkCardGrid)

//<h4>No Drinks Found. Please search by Ingredients</h4>