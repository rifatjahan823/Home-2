import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import './Header.css'

const Hedaer = () => {
    return (
        <div className=''>
            <div>
            <Navbar  bg="dark" variant="dark" collapseOnSelect expand="lg" sticky="top" className='bg'>
          <Container fluid> 
            <Navbar.Brand >
             <h4 className='logo'><FontAwesomeIcon icon={faShoppingBag} style={{color:'white'}}/> Summary</h4>
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="ms-3 mt-3">
                  <p>Search</p>
             </Nav>
             <Nav className="ms-auto mt-3">
                <p>Sign Out</p>
             </Nav>
  
           
            </Navbar.Collapse>
          </Container>
        </Navbar>
         </div>
        </div>
    );
};

export default Hedaer;