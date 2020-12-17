import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import About from "./components/About";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import NavBar from './components/NavBar';


const App = ()=> {

  // The 'exact' keyword prevents '/about' and '/pricing' from loading the home page as well...on to the same page.

  // You could use the same path for mutliple components, and they will all be loaded. Not 
  // sure if that is something  you should be doing...
  
  // Normally, you only need one router per application. Some larger applications might use multiple


  return (
    <Router>
      <>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/pricing" component={Pricing} />
      </>
    </Router>
  )

}

export default App;
