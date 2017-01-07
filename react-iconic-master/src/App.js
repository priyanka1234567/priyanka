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

  // `render` is called whenever the component's props OR state are updated.
  render() {
    // console.log('The App component was rendered');

    return (

      <div className="App">
      <Survey/>
      <ul id="navigation">

            <li className ="current">

              <button className="home" onClick={this.navigate.bind(this)}><i className="fa fa-home"></i> Home</button>
            </li>
            &nbsp;  &nbsp;
            <li>

              <Link to="aboutus"><button className="aboutus">About Us</button></Link>
            </li>
              &nbsp;  &nbsp;
            <li>
              <Link to="news"><button className="news">News</button></Link>
            </li>
              &nbsp;  &nbsp;

            <li>
              <Link to="contact"><button className="contactbtn"><i className="fa fa-phone"></i> Contact Us</button></Link>
            </li>

            &nbsp;  &nbsp;
            <li className="signup1">
              <Link to="signup"><button className="signup1" ><i className="fa fa-user" ></i> Sign Up</button></Link>
            </li>
              &nbsp;  &nbsp;

            <li className="login11">

              <Link to="/login"><button className="login1"><i className="fa fa-sign-in" ></i> Login</button></Link>
            </li>
            &nbsp;  &nbsp;
        </ul>
      <div className="content">
         {this.props.children}
      </div>


      </div>
    );
  }
}

export default App;
