import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userPostFetch} from '../actions/signup';



class Signup extends Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.userPostFetch(this.state,this.props.history)
        
    }

    componentDidMount() {
        document.querySelector('body').style.background = 'whitesmoke';
    }
    
    componentWillMount() {
        const isAuth = !!localStorage.getItem('token');
          if (isAuth) {
            this.props.history.replace('/mybar')
          }
    }
    
    render(){
        return(
        <form onSubmit={this.handleSubmit} className="signup">
            <h1 className="signup-title">Sign Up For An Account</h1>
                <div className="signup-details">
                    <label className="username-label">Username</label>
                    <input
                    name='username'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.handleChange}
                    /><br/>

                    <label className="password-label">Password</label>
                    <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    /><br/>

                    <input type='submit'/>
                </div>
        </form>
        )
    }
    
}

const mapDispatchToProps = dispatch => ({
    userPostFetch: (userInfo, history ) => dispatch(userPostFetch(userInfo, history))
})


export default connect(null, mapDispatchToProps)(Signup);