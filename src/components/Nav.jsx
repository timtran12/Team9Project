import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";

function AppNav () {
    return (
        <Navbar id='light' bg="light" expand="lg">
            <Container>
            
            <Navbar.Brand id='prod-name' href="/" style={{ color: 'white' }}>
                <img id='logo'
                src="/merchIT.png"
                alt="merchIT"
            /> 
            merchIT</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="" style={{ width: "100%" }}>
                
                <Nav.Link href="/" style={{ color: 'white' }}>Home</Nav.Link>
                
                <Nav.Link href="About" style={{ color: 'white' }}>About</Nav.Link>
                <Nav.Link href="ContactUs" style={{ color: 'white' }}>
                    Contact Us
                </Nav.Link>
                
                    
                
                
                </Nav>
                <span class="Login/Signup">
                    <Nav.Link className='justify-content-end' href="" style={{ color: 'white' }}>Login/Signup</Nav.Link>
                </span>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNav;