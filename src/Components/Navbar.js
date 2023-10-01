import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';
import  orange from "./images/orange.png";

function Nev() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{height:90}} className="Navbar">
      <Container >
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <img alt="" src={orange} style={{height:80,borderRadius:100,margin:0,padding:0,width:80}}/>
          <Nav.Link><h4 style={{color:'whitesmoke',marginTop:'15px'}}><b><i>BOOK & EAT</i></b></h4></Nav.Link>
          <Nav.Link href="/" id="a1" style={{marginLeft:150}}>Home</Nav.Link>
          <NavDropdown title="Details" id='a1' style={{color:"white"}}>
              <NavDropdown.Item href="/breakfast" id="aa">Breakfast</NavDropdown.Item>
              <NavDropdown.Item href="/lunch" id="aa">
                Lunch
              </NavDropdown.Item>
              <NavDropdown.Item href="/snacks" id="aa">Snacks</NavDropdown.Item>
              
            </NavDropdown>
           
            <Nav.Link href="/login" id="a1" >Login</Nav.Link>
            
            
          </Nav>
          <Nav>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nev;