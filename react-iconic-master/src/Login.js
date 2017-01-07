import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';

import icons from './icons';
class Login extends React.Component {


      addInputField(e){
          e.preventDefault();

          var inputs = this.state.inputs;
          inputs.push({name: null});
          this.setState({inputs : inputs});
      }


  render(){

    return(
      <div className="loginpage">
      <center>
      <br/> <br/> <br/><br/>  <br/>  <br/><br/> <br/>
          <h1 id="title" className="animated fadeInDown">Login</h1>
            <br/>

          <input type="text" placeholder=  " username"/><br/><br/>

           <input type="password" placeholder="password"/><br/><br/>
           <button className="btn btn-success " onClick={this.addInputField}>Add Input</button>

  
           <button className="loginbtn btn-success" bsStyle="primary">login</button>
           <br/>
           <br/>
      </center>

</div>
    );
  }
}

export default Login;
