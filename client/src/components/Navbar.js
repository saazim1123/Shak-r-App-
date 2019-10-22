import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar, Form, Button} from 'react-bootstrap';
import ShakrLogo from '../img/logo.png'

export const Navigationbar = ({ isAuth }) => {

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/mybar"><img src={ShakrLogo}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {
          isAuth &&
          <Fragment>
            <Nav className="mr-auto">
              <Nav.Link href="/mybar">My Bar</Nav.Link>
              <Nav.Link href="/drinks">All Recipes</Nav.Link>
              <Nav.Link href="/drinks/random">Random Cocktails</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link style={{color: 'black'}} href="/drinks-likes">Liked Cocktails</Nav.Link>
              <Button onClick={()=>{localStorage.clear(); window.location.href="/";}}>Logout</Button>
            </Nav>
          </Fragment>
        }
      </Navbar.Collapse>
    </Navbar>
  )
}
