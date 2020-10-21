import React from 'react';

const Navigation = ( {onRouteChange}) => {
	return(
		<nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
	      <div className="navbar-brand">
	        <div href="" className="navbar-item">
	          <h1 className="is-size-3">
	            FaceFinder
	          </h1>
	        </div>
	      </div>
	      <div className="navbar-menu">
	        <div className="navbar-end">
	          <div className="navbar-item has-dropdown is-hoverable">
	            <div className="navbar-link">
	              Theme
	            </div>

	            <div className="navbar-dropdown">
	              <div className="navbar-item">
	                Light
	              </div>
	              <div className="navbar-item">
	                Dark
	              </div>
	            </div>
	          </div>
	          <div className="navbar-item">
	            <button onClick={() => onRouteChange('signin')} className="button">
	              Sign Out
	            </button>
	          </div>
	        </div>
	      </div>
	    </nav>
    );
}

export default Navigation;