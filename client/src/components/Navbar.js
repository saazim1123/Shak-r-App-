import React from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar, Form, Button} from 'react-bootstrap';

export const Navigationbar = () => {

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/mybar">Shak-r</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/mybar">My Bar</Nav.Link>
          <Nav.Link href="/drinks">All Recipes</Nav.Link>
          <Nav.Link href="/drinks/random">Random Cocktails</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link style={{color: 'black'}} href="/drinks-likes">Liked Cocktails</Nav.Link>
          <Button onClick={()=>{localStorage.clear(); window.location.href="/";}}>Logout</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
