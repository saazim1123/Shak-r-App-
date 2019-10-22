import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navbar } from '../actions/site'







class Landing extends React.Component {
  componentWillMount() {
    this.props.navbar(false)
  }

  componentWillUnmount(){
    this.props.navbar(true)
  }

  render(){
    return (
      <div>
        <div>
          <br /><br />
          <div className="landing-header">
          <h1 ><strong>Shakr</strong></h1>
          </div>
          <div className="cocktail-image">
         
          </div>
          <h5 className="slogan">Need to know which bourbon makes the perfect Manhattan? Interested in making your cocktail bar favorite at home?</h5>
          <br /><br />
          <h6 className="description"> Shakr is your definitive resource – everything you need to know about craft spirits and cocktails in one beautiful app.</h6>
          <Link to="/signup">
            <span>
            
              <h5>Sign Up</h5>
            </span>
          </Link>
          <Link to="/login">
            <span>
              <h5>Login</h5>
            </span>
          </Link>
        
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    site: state.site
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    navbar: navbar,
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Landing)