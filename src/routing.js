var React = require('react');
var reactDom = require('react-dom');
import { Router, Route , IndexRoute , HashRouter } from "react-router";
//import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import RoutingLayout from "../Components/RoutingLayout";
import Features from "../Components/RoutingFeatures";
import Settings from "../Components/RoutingSettings";
import Archive from "../Components/RoutingArchieves";

const app3 = document.getElementById('view');			
reactDom.render((
   <HashRouter>
      <Route path = "/" component = {RoutingLayout}>
         <IndexRoute component = {Features} />
         <Route path = "Features" component = {Features} />
         <Route path = "Archive" component = {Archive} />
         <Route path = "Settings" component = {Settings} />
      </Route>
   </HashRouter>
), app3);				