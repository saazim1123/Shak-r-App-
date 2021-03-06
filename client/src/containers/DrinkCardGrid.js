import React, {Fragment} from 'react';
import { DrinkTextCard } from '../components/DrinkTextCard'
import { DrinkImageCard } from '../components/DrinkImageCard'

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
    var drinkTextCards = [];
    if (this.props.drinks) {
      drinkTextCards = this.props.drinks.sort(this.sortByName).map((drink, i) => {
        if (this.props.site.myBar) {
          return <DrinkImageCard key={i} drink={drink} />
        } else {
          return <DrinkTextCard key={i} drink={drink} />
        }
        
      })
    }
    return (
      <div className="col s12">
        {
          this.props.drinks &&
          <Fragment>
            {drinkTextCards}
          </Fragment>
          ||
          <h4>No Drinks Found. Please search by Ingredients</h4>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    drinks: state.drinks.drinks,
    site: state.site
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkCardGrid)