import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import About from "./components/About";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import NavBar from './components/NavBar';
import ErrorPage from './components/ErrorPage';


const App = ()=> {

  const initialPricing = [
    { level: "Hobby", cost: 0},
    { level: "Startup", cost: 10},
    { level: "Enterprise", cost: 100}
  ];

  // pricing is a array of objects
  const [pricing, setPricing] = useState(initialPricing);

  // The 'exact' keyword prevents '/about' and '/pricing' from loading the home page as well...on to the same page.

  // You could use the same path for mutliple components, and they will all be loaded. Not 
  // sure if that is something  you should be doing...you probably want 
  // to - so that you add mutiple components to a single 'view', but not 
  // perhaps from this file, but from the 'rendered' file.
  
  // Normally, you only need one router per application. Some larger applications might use multiple


  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pricing" 
                 render={ () => <Pricing prices={pricing} /> }
           />
          <Route component={ErrorPage} />
        </Switch>
      </>
    </Router>
  )

}

export default App;
