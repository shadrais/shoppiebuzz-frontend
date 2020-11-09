import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Frontpage from './pages/front-page/front_page'
import Loginregister from "./components/Login_register/Login_register";

 import Contact from './pages/Contact_us/Conatct_us';
import Aboutus from "./pages/About_us/About_us";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Frontpage />
        </Route>
        <Route path="/login">
          <Loginregister />
        </Route>
        <Route path="/about">
          <Aboutus />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Redirect to={'/'} />
      </Switch>
    </Router>


  );
}

export default App;
