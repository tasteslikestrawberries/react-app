import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";








class NavigationBar extends React.Component{
    render() {
        return (

<>

<Navbar id="navbar" bg="light" variant="light">

    <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
      <Nav className="mr-auto">

             <Nav.Link as={Link} to="/form">Form</Nav.Link>
             <Nav.Link as={Link} to="/table">Table</Nav.Link>
  
      </Nav>

  </Navbar>


    </>
  );
}
}


export default NavigationBar