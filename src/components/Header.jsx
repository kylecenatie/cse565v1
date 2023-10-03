import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../images/k-white-noback.png"
import {  BsGithub } from "react-icons/bs";
import { AiFillLinkedin} from "react-icons/ai"
import { AiOutlineMail} from "react-icons/ai"
// import { SiPremierleague} from "react-icons/si"


import './header.css'
import { NavbarText } from 'react-bootstrap';


export default function Header() {
  return (
    <Navbar className="main-header"  sticky="top"  expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="Logo"
            src={logo}
            width="80"
            height="80"
            className="d-inline-block align-top"
          />
 <span className="coloredtext">YLE CENATIEMPO</span> 
        </Navbar.Brand>
        <NavbarText>CSE565 Project 3</NavbarText>
        <div className='left'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end'>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/education">Education</Nav.Link>
            <Nav.Link as={NavLink} to="/hobbies">Hobbies</Nav.Link>
            <NavDropdown title="Contact" id="collasible-nav-dropdown">
              <NavDropdown.Item href="mailto:cenatiempo.kyle@gmail.com"><AiOutlineMail /> &emsp;Email</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/kyle-cena/"><AiFillLinkedin /> &emsp;LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/kylecenatie"><BsGithub /> &emsp;Github</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
