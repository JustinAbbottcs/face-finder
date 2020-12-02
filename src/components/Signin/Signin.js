import React from 'react';
import { Component } from 'react';
import Login from './Login.js';
import Register from './Register.js';


class Signin extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      isUser: true,
	      email: '',
	      password: '',
	      username: ''
	  	}
  	}


	makeActive = (str) => {
		if(str === 'login') {
			this.setState({isUser: true})
		}
		else {
			this.setState({isUser: false})
		}
	}


	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}


	onUsernameChange = (event) => {
		this.setState({username: event.target.value})
	}


	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}


	onSubmitForm = (route) => {
		// console.log(route);
		if (this.state.isUser) {
			// console.log(route);
			fetch('http://localhost:8080/signin', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					email: this.state.email,
					password: this.state.password
				})
			})
			.then(res => res.json())
			.then(user => {
				if(user._id) {
					this.props.loadUser(user);
					this.props.onRouteChange(route);
				}
			})
		} else {
			console.log("registering...")
			fetch('http://localhost:8080/register', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					email: this.state.email,
					username: this.state.username,
					password: this.state.password
				})
			})
			.then(res => res.json())
			.then(user => {
				if(user._id) {
					this.props.loadUser(user);
					this.props.onRouteChange(route);
				}
			})
		}
	}

	render() {
		return(
		<div className="columns is-desktop is-vcentered  signin-container">
			<div className="column is-desktop is-vcentered flex-direction-column signin-container-2">
				<div className="box box-signin">
					{this.state.isUser ? 
						<div>
							<Login 
								onSubmitForm={this.onSubmitForm}
								onEmailChange={this.onEmailChange} 
								onPasswordChange={this.onPasswordChange}/>
							<div className="sign-up-link">
								{"Don't have an account?"}
								<a onClick={() => this.setState({isUser: false})}> {"Sign Up!"}</a>
							</div>
						</div>
							: 
						<div>	
							<Register 
								onSubmitForm={this.onSubmitForm}
								onUsernameChange={this.onUsernameChange}
								onEmailChange={this.onEmailChange} 
								onPasswordChange={this.onPasswordChange}/>
							<div className="sign-up-link">
								Already have an account?
								<a onClick={() => this.setState({isUser: true})}> Log In!</a>
							</div>
						</div>}
				</div>
			</div>
		</div>
	)}
}


export default Signin;