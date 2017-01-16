import React from 'react';
import icons from './icons'
import ReactDOM from 'react-dom';
import './home.css'
import './location1.html';
import GoogleMap from 'google-map-react';
class home extends React.Component {
  


  render(){

    return(
      <div className="homepage w3-container ">
      <h1> home</h1>
      <GoogleMap>

      </GoogleMap>




</div>
    );
  }
}

export default home;
