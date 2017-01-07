import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import carousel from 'react-bootstrap'
// import Login from './Login.js';
import home from './home.js';
import aboutus from './aboutus.js';
import signup from './signup.js';
import contact from './contact.js';
import style from './style.js';
import Login from './Login.js';
import news from './news.js';
 import {Router,Route,IndexRoute,hashHistory} from "react-router"

ReactDOM.render(

<Router history={hashHistory}>
<Route path="/" component={App}>
<IndexRoute component={home}></IndexRoute>
<Route path="aboutus" component={aboutus}></Route>
<Route path="contact" component={contact}></Route>
<Route path="login" component={Login}></Route>
<Route path="signup" component={signup}></Route>
<Route path="news" component={news}></Route>

</Route>
</Router>,
  document.getElementById('app'));
