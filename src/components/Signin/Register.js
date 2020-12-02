import React from 'react';

const Register = ({onEmailChange, onUsernameChange, onPasswordChange, onSubmitForm}) => {
	return(
	<div className="input-field-container">
		<div className="field">
		  <label className="label">Create Account</label>
		  <div className="control has-icons-left">
		    <input 
		    	className="input"
		     	type="text" 
		     	name="username"
		     	placeholder="Username"
		     	onChange={onUsernameChange}/>
		    <span className="icon is-small is-left">
		      <i className="fas fa-user"></i>
		    </span>
		  </div>
		</div>
		<div className="field">
		  <div className="control has-icons-left">
		    <input 
		    	className="input" 
		    	type="text" 
		    	name="email"
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
		    	type="text" 
		    	name="password"
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
		    	onClick={() => onSubmitForm('home')}>
		    		Register
		    </button>
		  </div>
		</div>
	</div>
	);
}

export default Register;