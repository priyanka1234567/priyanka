import React from 'react';
import ReactDOM from 'react-dom';
import 'isomorphic-fetch';
import Mapp from './Mapp.js';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import home from './home.js';
import aboutus from './aboutus.js';
import signup from './signup.js';
import contact from './contact.js';


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

<Route path="Mapp" component={Mapp}></Route>
<Route path="signup" component={signup}></Route>
<Route path="news" component={news}></Route>

</Route>
</Router>,
  document.getElementById('root')
);
ReactDOM.render(
  <Mapp/>,
  document.getElementById('r1')
);
