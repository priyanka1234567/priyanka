import React from 'react';
import ReactDOM from 'react-dom';
import './signup.css';

class signup extends React.Component {



  render(){

    return(
      <div className="signup w3-container w3-center w3-animate-top">
      <center>
      <br/><br/><br/>
      <h1>
      Sign Up
      <br/>
        </h1>
        <br/>
      <input type="text" className="w3-input" placeholder="username"/><br/><br/>
       <input type="password" className="w3-input" placeholder="password"/><br/><br/>
        <input type="password" className="w3-input" placeholder="confirm password"/><br/><br/>

       <button bsStyle="primary" className="w3-btn w3-round-large w3-large">Sign Up</button>


      </center>

</div>
    );
  }
}

export default signup;
