import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navbar } from '../actions/site'
import LandingDrinkImage from '../img/cocktail.jpeg';
import ShakrLogo from '../img/logo1.png';
import { ButtonToolbar, Button } from 'react-bootstrap';

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
    //document.querySelector('body').style.background = 'url('+LandingDrinkImage+') no-repeat';
    // document.querySelector('body').style.background.filter = 'url('+LandingDrinkImage+') blur(1px)';
    //document.querySelector('body').style.backgroundSize = 'cover';
    //document.querySelector('body').style.minHeight = '100vh';
  }

  render(){
    return (
      <div>
        <div>
          <br />
          <img src={LandingDrinkImage} style={{position: 'fixed', left: 0, right: 0, top: 0, bottom: 0, opacity: 0.8}}/>
          <div className="row" style={{top: '7rem', position: 'relative'}}>
            <div className="col-12 col-md-6" style={{color: '#fff'}}>
              <img src={ShakrLogo} style={{maxWidth: "75%", width:"30rem"}}/>
            </div>
            <div className="col-12 col-md-6" style={{color: '#fff'}}>
              <h5 className="slogan">Need to know which bourbon makes the perfect Manhattan? Interested in making your cocktail bar favorite at home?</h5>
                <br /><br />
                <h6 className="description"> Shakr is your definitive resource – everything you need to know about craft spirits and cocktails in one beautiful app.</h6><br></br> <br></br>
                <ButtonToolbar>
                  <Link to="/signup">
                    <span style={{marginRight: "16px"}}>
                    <Button variant="primary">Sign Up</Button>
                    </span>
                  </Link>
                  <Link to="/login" >
                    <span >
                    <Button variant="primary">Login</Button>
                    </span>
                  </Link>
                </ButtonToolbar>
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