import React from 'react';
import { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Signin from './components/Signin/Signin';
import './App.css';




const particlesOptions = { 
    "particles": {
    "number": {
      "value": 30,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "triangle"
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "move": {
      "enable": true,
      "speed": 1.2,
      "direction": "top",
      "random": false,
      "straight": true,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "retina_detect": true
}



const defaultState = {
    input: '',
    url: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    box: {},
    route: 'signin',
    user: {
      id: '',
      name: '',
      email: '',
      numImgSubmitted: '',
      joined: ''
    }
}


class App extends Component {
  constructor() {
    super();
    this.state = defaultState;
    }


  loadUser = (data) => {
    this.setState({
      user: {
        id: data._id,
        name: data.name,
        email: data.email,
        numImgSubmitted: data.numImgSubmitted,
        joined: data.joined
      }
    })
  }


  calculateFaceDim = (data) => {
    const api_result = data.['outputs'][0]['data']['regions'][0]['region_info']['bounding_box']
    const img = document.getElementById("pic");
    const width = Number(img.width);
    const height = Number(img.height);

    return {
      topLine: height * api_result.top_row,
      leftLine: width * api_result.left_col, 
      bottomLine: height - (height * api_result.bottom_row),
      rightLine: width - (width * api_result.right_col)
    }
  }


  displayFaceBox = (data) => {
    this.setState({box: data})
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }


  onFormSubmit = () => {
    this.setState({url: this.state.input})

    fetch('http://localhost:8080/imageURL', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              input: this.state.input
            })
          })
      .then(response => response.json())
      .then(response => {
        if(response) {
         this.displayFaceBox(this.calculateFaceDim(response));

         fetch('http://localhost:8080/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(res => res.json())
          .then(cnt => {
            this.setState(Object.assign(this.state.user, {numImgSubmitted: cnt}))
          })
          .catch(err => console.error(err))
          }
        })
      .catch(err => console.error(err))
  }


  onRouteChange = (route) => {
    if (route === 'signin') this.setState(defaultState);
    this.setState({route: route})
  }


  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        {
          this.state.route === 'signin' ? 
          <Signin 
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}/>
            :
          <div>
            <Navigation onRouteChange={this.onRouteChange}/>
            <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onFormSubmit={this.onFormSubmit}/>
            <Rank 
              name={this.state.user.name}
              numImgSubmitted={this.state.user.numImgSubmitted}/>
            <FaceRecognition 
              url={this.state.url}
              box={this.state.box}/> 
          </div>}
      </div>
    );
  }
}

export default App;








