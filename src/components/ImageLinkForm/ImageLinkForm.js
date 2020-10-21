import React from 'react';


const ImageLinkForm = ({ onInputChange, onFormSubmit }) => {
  return (
    <section className="section section-link-form">
      <div className="container main-content">

        <label className="label is-size-4">
          This face finding algorithm will detect faces in your pictures. Give it a try!
        </label>
        <div className="field has-addons has-addons-centered">

          <div className="control">
            <input className="input" type="text" placeholder="Image URL" onChange={onInputChange}/>
          </div>

          <div className="control">
            <button className="button is-info" href="" onClick={onFormSubmit}>
              Detect
            </button>
          </div>
          
        </div>
        <p className="help">Paste an image URL for face detection</p>
      	</div>
    </section>
  );
}

export default ImageLinkForm;