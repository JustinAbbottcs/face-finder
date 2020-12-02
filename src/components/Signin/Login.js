import React from 'react';

const Login = ({onEmailChange, onPasswordChange, onSubmitForm}) => {
	return(
	<div className="input-field-container">
		<div className="field">
		  <label className="label">User Login</label>
		  <div className="control has-icons-left">
		    <input 
		    	className="input" 
		    	type="text" 
		    	placeholder="Email"
		    	onChange={onEmailChange}/>
		    <span className="icon is-small is-left">
		      <i className="fas fa-inbox"></i>
		    </span>
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
		      <i className="fas fa-key"></i>
		    </span>
		    <span className="icon is-small is-right">
		      <i className="fas fa-check"></i>
		    </span>
		  </div>
		</div>

		<div className="field is-grouped is-grouped-centered landing-page-button">
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