import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';

import icons from './icons';

// Can delete start
      var TextBox = React.createClass({
          render: function () {
              return <div> <input type="text"  enabled="true"/>:&nbsp;&nbsp;
              <input type="text"  enabled="true"/>
               </div>;
          }
      });
      var Buttons = React.createClass({
          render: function () {
              return <div>
               </div>;
          }
      });

      var Container = React.createClass({
          getInitialState: function () {
              return { chatboxes: [] };
          },
          renderChatbox: function () {
              var cbs = this.state.chatboxes;
              cbs.push(<TextBox />);
              this.setState({chatboxes: cbs});
          },

          render: function() {
              return <div><button className="btn " onClick={this.renderChatbox}>Add feature</button>

              {this.state.chatboxes}
              </div>;
          }
      });
// Can delete end

  class Login extends React.Component {


      addInputField(e){
          e.preventDefault();

          /* get element */
          var button = e.target;
          /* Get parent */
          var parentEle = button.parentElement.parentElement;

          /* Create text box */
          var input = document.createElement('input');
          input.type = "button";
          input.value="ok";


          /* add to div */
          parentEle.appendChild(input);
          document.getElementById("ab").appendChild(input);


        }


//to call addinput field function
 //
  render(){

    return(
      <div className="loginpage w3-center w3-animate-top">
      <center>
      <br/>  <br/><br/> <br/>
      
          <h1 id="title" >Login</h1>
            <br/>
            <input type="text" className="w3-input" placeholder="username"/><br/><br/>
             <input type="password" className="w3-input" placeholder="password"/><br/><br/>
            <Container name="World" />
            <button className="btn btn-success " onClick={this.addInputField}>Add Input</button>
            <div id="ab" className="w3-container"></div>

           <button className="loginbtn btn-success" bsStyle="primary">login</button>
           <br/>
           <br/>


      </center>

</div>
    );
  }
}

export default Login;
