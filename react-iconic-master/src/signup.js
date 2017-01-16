import React from 'react';
import ReactDOM from 'react-dom';
import './signup.css';
//import Login from './Login.js';

class signup extends React.Component {
  constructor(props) {
        super(props);


  this.state={data:'', passwd:'',cnfpasswd:'',res:''};
  this.updateState=this.updateState.bind(this);
  this.updatePasswd=this.updatePasswd.bind(this);
  this.updatecnfPasswd=this.updatecnfPasswd.bind(this);
  this.validate=this.validate.bind(this);
  //this.handlesubmit=this.handlesubmit.bind(this);
  }
  updateState(e){
  this.setState({data:e.target.value});
  }

  updatePasswd(e){
  this.setState({passwd:e.target.value});
  }
  updatecnfPasswd(e){
  this.setState({cnfpasswd:e.target.value});
  }

  validate(username,password,confirmp){
    if(username==''|| password==''||confirmp=='')
    this.setState({res:'username or password cannot be empty'})
    var l=username.length;
    if(l<8 && username!='')
    this.setState({res:'username is too short(min 8 char)'})
    var m=password.length;
    var n=confirmp.length;
    if((m<8||n<8)&&(password!=''&&confirmp!=''))
    this.setState({res:'password too short'})
    if(password!=confirmp)
    this.setState({res:'passwords do not match'})
    if(l>=8 && m>=8 && n>=8 && password==confirmp)
    {
    alert('Successful registation!!you can login now!!');
    //{this.handlesubmit}
    }

  }
  // handlesubmit(){
  //   var c=document.getElementById("content");
  //
  //   ReactDOM.render(<Login/>,c);
  // }



  render(){

    return(
      <div className="signup w3-container w3-center w3-animate-top">
      <center>
      <br/><br/><br/>
<form>
      <h1>
      Sign Up
      <br/>
        </h1>
        <br/>
        <p>{this.state.res}</p>
        <input type="text" id="username" value = {this.state.data} onChange = {this.updateState} className="w3-input" placeholder="username"  /><br/><br/>
         <input type="password" value ={this.state.passwd} onChange = {this.updatePasswd} className="w3-input" placeholder="password" /><br/><br/>
         <input type="password" value ={this.state.cnfpasswd} onChange = {this.updatecnfPasswd} className="w3-input" placeholder="confirm password"  /><br/><br/>


        <button  className="w3-btn w3-round-large w3-large" onClick={()=>this.validate(this.state.data,this.state.passwd,this.state.cnfpasswd)}>Sign Up</button>
</form>

      </center>

</div>
    );
  }
}

export default signup;
