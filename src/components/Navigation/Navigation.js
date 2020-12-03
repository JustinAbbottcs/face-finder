import React from 'react';
import { Component } from 'react';


class Navigation extends Component {
  	
  	constructor(props) {
	    super(props);
	    this.state = {
	    	active: false
	    }
	}

    toggleActive = () => {
		this.setState({active: !this.state.active})
	}

	render() {
	    return (
	      <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
		      <div className="navbar-brand">
		        <div href="" className="navbar-item">
		          <h1 className="is-size-3">
		            <img src="/finimalism.svg" height="28"/>
		            <span>FaceFinder</span>
		          </h1>
		        </div>
		        <a role="button" 
		           onClick={() => this.toggleActive()} 
		           className={"navbar-burger" + (this.state.active ? " is-active" : "")} 
		           aria-label="menu" 
		           aria-expanded="false">
				  <span aria-hidden="true"></span>
				  <span aria-hidden="true"></span>
				  <span aria-hidden="true"></span>
				</a>
		      </div>
		      <div className={"navbar-menu" + (this.state.active ? " is-active" : "")}>
		        <div className="navbar-end">
		          <div className="navbar-item has-dropdown is-hoverable">
		            <div className={"navbar-link" + (this.state.active ? " is-arrowless" : "")}> 
		              Theme
		            </div>

		            <div className="navbar-dropdown is-right">
		              <div className="navbar-item">
		                Light
		              </div>
		              <div className="navbar-item">
		                Dark
		              </div>
		            </div>
		          </div>
		          <div className="navbar-item">
		            <button onClick={() => this.props.onRouteChange('signin')} className="button">
		              Sign Out
		            </button>
		          </div>
		        </div>
		      </div>
		    </nav>
	    );
	  }
}

export default Navigation;
