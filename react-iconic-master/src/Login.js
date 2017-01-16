import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import Mapp from './Mapp.js';
import icons from './icons';
import Adminpage from './Adminpage.js';
import App from './App.js';

      class Login extends React.Component {
    constructor(props) {
          super(props);

          this.state={data:'', passwd:'',res:''};
 this.updateState=this.updateState.bind(this);
 this.updatePasswd=this.updatePasswd.bind(this);
 this.validate=this.validate.bind(this);
       }
       updateState(e){
   this.setState({data:e.target.value});
}

updatePasswd(e){
  this.setState({passwd:e.target.value});
}

validate(username,password){
  if((username=='')||(password==''))
  {
    this.setState({res:"please enter username and password"})
  }
  else if((username=='user')&&(password=='123')){
     this.setState({res:'VALID, Login Successful'});
     var c=document.getElementById("content");

     ReactDOM.render(<Mapp uname={this.state.data}/>,c);
   }
   else if((username=='admin')&&(password=='123')){
      this.setState({res:'VALID, Login Successful'});
      var c=document.getElementById("content");

      ReactDOM.render(<Adminpage/>,c);
    }
  else {
    var l=username.length;
    if(l<5)

     this.setState({res:'Invalid Username and Password'});
  }
}




//to call addinput field function
 //
  render(){

    return(
      <div className="signup w3-center w3-animate-top">
      <center>
      <br/>  <br/><br/> <br/>

          <h1 id="title" >Login</h1>
            <br/>
            <p>{this.state.res}</p>
            <input type="text" id="username" value = {this.state.data} onChange = {this.updateState} className="w3-input" placeholder="username"  /><br/><br/>
             <input type="password" value ={this.state.passwd} onChange = {this.updatePasswd} className="w3-input" placeholder="password"/><br/><br/>


            <button  className="w3-btn w3-round-large w3-large" onClick={()=>this.validate(this.state.data,this.state.passwd)}>Login</button>

           <br/>
           <br/>


      </center>

</div>
    );
  }
}

export default Login;
