import React, { Component } from 'react';
import './App.css';
import {Link} from "react-router";
import icons from './icons';
import Survey from './Survey.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

// webpack.config.js specifies index.js as the entry point, and
// index.js imports and renders this `App` component.

class App extends Component {
  navigate()
  {
    this.props.history.pushState(null,"/")
    }
    constructor(props)
    {
      super(props);
      this.state={

      }
    };


  // `render` is called whenever the component's props OR state are updated.
  render() {
    // console.log('The App component was rendered');

    return (

      <div id="App" className="App w3-container ">
      <Survey/>
      <ul id="navigation w3-container w3-ul">

            <li className ="current" >

              <button className="home w3-btn w3-round-large w3-large " onClick={this.navigate.bind(this)}><i className="fa fa-home"></i> Home</button>
            </li>
            &nbsp;  &nbsp;
            <li>

              <Link to="aboutus"><button className="aboutus w3-btn w3-round-large  w3-large ">About Us</button></Link>
            </li>
              &nbsp;  &nbsp;
            <li>
              <Link to="news"><button className="news w3-btn w3-round-large  w3-large">News</button></Link>
            </li>
              &nbsp;  &nbsp;

            <li>
              <Link to="contact"><button className="contactbtn w3-btn w3-round-large  w3-large"><i className="fa fa-phone"></i> Contact Us</button></Link>
            </li>
            &nbsp;  &nbsp;




            &nbsp;  &nbsp;
            <li className="signup1">
              <Link to="signup"><button className="signup1 w3-btn w3-round-large  w3-large" ><i className="fa fa-user" ></i> Sign Up</button></Link>
            </li>
              &nbsp;  &nbsp;

            <li className="login11">

              <Link to="/login"><button className="login1 w3-btn w3-round-large  w3-large"><i className="fa fa-sign-in" ></i> Login</button></Link>
            </li>
            &nbsp;  &nbsp;
        </ul>
      <div id="content" className="content w3-container w3-center  ">
         {this.props.children}

      </div>


      </div>
    );
  }
}

export default App;
