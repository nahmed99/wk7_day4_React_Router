import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import About from "./components/About";
import Home from "./components/Home";
import Pricing from "./components/Pricing";

const App = ()=> {
  
  return (
    <Router>
      <>
        <Route path="" component={Home} />
      </>
    </Router>
  )

}

export default App;
