import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ( {url, box} ) => {
	return(
		<section className="section section-image">
			<div className="column is-half is-offset-one-quarter">
				{/*
							      <div className="box img-container">*/}
				      <div className="content">
				          <img id="pic" 
				          		src={url} 
				          		alt=""
				          		width="500px"
				          		height="auto"/>
				          <div className="bounding-box"
				          		style={{top: box.topLine,
									   right: box.rightLine,
									   bottom: box.bottomLine,
									   left: box.leftLine}}></div>
				      </div>

			      </div>
			{/* </div>*/}
    	</section>
    );
}

export default FaceRecognition;