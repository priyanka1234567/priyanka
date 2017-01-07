import React from 'react';
import ReactDOM from 'react-dom';
import './signup.css';

class signup extends React.Component {



  render(){

    return(
      <div className="signup">
      <center>
      <br/><br/><br/>
      <h1>
      Sign Up
      <br/>
        </h1>
        <br/>
      <input type="text" placeholder="username"/><br/><br/>
       <input type="password" placeholder="password"/><br/><br/>
        <input type="password" placeholder="confirm password"/><br/><br/>

       <button bsStyle="primary">Sign Up</button>


      </center>

</div>
    );
  }
}

export default signup;
