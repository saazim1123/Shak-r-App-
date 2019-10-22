import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navbar } from '../actions/site'
import LandingDrinkImage from '../img/cocktail.jpeg';
import ShakrLogo from '../img/logo1.png';

class Landing extends React.Component {
  componentWillMount() {
    const isAuth = !!localStorage.getItem('token');
    if (isAuth) {
      this.props.history.replace('/mybar')
    }
    this.props.navbar(false)
  }

  componentWillUnmount(){
    this.props.navbar(true);
  }

  componentDidMount() {
    document.querySelector('body').style.background = 'url('+LandingDrinkImage+') no-repeat';
    // document.querySelector('body').style.background.filter = 'url('+LandingDrinkImage+') blur(1px)';
    document.querySelector('body').style.backgroundSize = 'cover';
    document.querySelector('body').style.minHeight = '100vh';
  }

  render(){
    return (
      <div>
        <div>
          <br />
          <div className="row" style={{top: '7rem', position: 'relative'}}>
            <div className="col-12 col-md-6" style={{color: '#fff'}}>
              <img src={ShakrLogo}/>
            </div>
            <div className="col-12 col-md-6" style={{color: '#fff'}}>
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