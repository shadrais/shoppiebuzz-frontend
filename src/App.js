import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Frontpage from './pages/front-page/front_page'
import Registration from './registration.js';


function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Frontpage />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
        </Switch>
    </Router>
    
     
  );
}

export default App;
