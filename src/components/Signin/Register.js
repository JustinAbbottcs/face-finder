import React from 'react';

const Register = ({onEmailChange, onUsernameChange, onPasswordChange, onSubmitForm}) => {
	return(
	<div>

		<div className="field">
		  <label className="label">Register</label>
		  <div className="control">
		    <input 
		    	className="input"
		     	type="text" 
		     	name="email"
		     	placeholder="Email"
		     	onChange={onEmailChange}/>
		  </div>
		</div>
		<div className="field">
		  <div className="control">
		    <input 
		    	className="input" 
		    	type="text" 
		    	name="username"
		    	placeholder="Username"
		    	onChange={onUsernameChange}/>
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
		    	onClick={() => onSubmitForm('home')}>
		    		Register
		    </button>
		  </div>
		</div>
	
	</div>
	);
}

export default Register;