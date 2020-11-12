import React from 'react'

import { Navbar, Nav } from 'react-bootstrap'
import './header.css'

const Header = () => {
  return (
    <Navbar
      className='navbar navbar-expand-lg navbar-dark bg-primary'
      expand='lg'>
      <Navbar.Brand href='/'>ShoppieBuzz</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='/login'>Sign In</Nav.Link>
          <Nav.Link href='/about'>About Us</Nav.Link>
          <Nav.Link href='/contact'>Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
