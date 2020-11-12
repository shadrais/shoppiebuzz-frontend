import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Frontpage from './pages/front-page/front_page'
import Headers from './components/header/header'

import Contact from './pages/Contact_us/Conatct_us'
import Aboutus from './pages/About_us/About_us'
import Signin from './components/Sign-in/Sign-in'
import Signup from './components/Sign-up/Sign-up'

function App() {
  return (
    <>
      <Headers />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Frontpage />
          </Route>
          <Route path='/login'>
            <Signin />
          </Route>
          <Route path='/register'>
            <Signup />
          </Route>
          <Route path='/about'>
            <Aboutus />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Redirect to={'/'} />
        </Switch>
      </Router>
    </>
  )
}

export default App
