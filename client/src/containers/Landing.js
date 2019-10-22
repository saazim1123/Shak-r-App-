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
        <div className="center-align">
          <br /><br />
          <div className="landing-header">
          <h1 ><strong>Shak-r</strong></h1>
          <h5 className="slogan">Cocktail App, Make cocktails in your own home</h5>
          <br /><br />
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