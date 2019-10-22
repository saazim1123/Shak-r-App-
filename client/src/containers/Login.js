import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userLoginFetch} from '../actions/login';

class Login extends Component {

    state = {
        username: "",
        password: ""
      }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    componentWillMount() {
      const isAuth = !!localStorage.getItem('token');
      if (isAuth) {
        this.props.history.replace('/mybar')
      }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.userLoginFetch(this.state,this.props.history)
    }

    componentDidMount() {
      document.querySelector('body').style.background = 'whitesmoke';
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>

        <label>Username</label>
        <input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}
          /><br/>

        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>

        <input type='submit'/>
      </form>
        )
    }
    
}

const mapDispatchToProps = dispatch => ({
    userLoginFetch: (userInfo, history )=> dispatch(userLoginFetch(userInfo, history))
  })

  export default connect(null, mapDispatchToProps)(Login);