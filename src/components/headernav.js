import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

const Header = ({ siteTitle }) => (
  <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand><Link to="/" style={{ color: "white" }}>{siteTitle}</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link><Link to="/" activeStyle={{ color: "red" }} style={{ color: "white" }}>Home</Link></Nav.Link>
      <Nav.Link><Link to="/info" activeStyle={{ color: "red" }} style={{ color: "white" }}>Info</Link></Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
