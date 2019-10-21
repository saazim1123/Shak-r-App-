import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navbar } from '../actions/site'
import { Image} from 'react-bootstrap'



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
          <h1><strong>Shak-r</strong></h1>
          <h5>App Slogan</h5>
          <br /><br />
          <Link to="/signup">
            <span>
            <Image src="/Users/flatriron/Desktop/Shak-r App/client/src/logo.svg" />
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