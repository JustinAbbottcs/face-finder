import React from 'react';

const Rank = ({ name, numImgSubmitted}) => {
	return(
	<div>
		{`${name}, you've processed ${numImgSubmitted} picture so far!`}
	</div>
	);
}

export default Rank;