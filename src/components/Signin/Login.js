import React from 'react';

const Login = ({onEmailChange, onPasswordChange, onSubmitForm}) => {
	return(
	<div>
		<div className="field">
		  <label className="label">Sign In</label>
		  <div className="control">
		    <input 
		    	className="input" 
		    	type="text" 
		    	placeholder="Email"
		    	onChange={onEmailChange}/>
		  </div>
		</div>

		<div className="field">
		  <div className="control has-icons-left has-icons-right">
		    <input 
		    	className="input" 
		    	type="password" 
		    	placeholder="Password"
		    	onChange={onPasswordChange}/>
		    <span className="icon is-small is-left">
		      <i className="fas fa-user"></i>
		    </span>
		    <span className="icon is-small is-right">
		      <i className="fas fa-check"></i>
		    </span>
		  </div>
		</div>

		<div className="field is-grouped is-grouped-centered">
		  <div className="control">
		    <button 
		    	className="button is-link" 
		    	onClick={() => onSubmitForm('home')}>Log In</button>
		  </div>
		</div>
	</div>
	);
}

export default Login;