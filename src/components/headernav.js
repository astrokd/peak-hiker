import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

import * as navStyles from "./headernav.module.css"

const Header = ({ siteTitle }) => (
  <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "DarkBlue" }} variant="dark">
  <Container>
  <Navbar.Brand>
    <Link to="/" className={navStyles.navBrand}>
      {siteTitle}
    </Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link><Link to="/" activeClassName={navStyles.activeNavLink} className={navStyles.navLink}>Home</Link></Nav.Link>
      <Nav.Link><Link to="/about" activeClassName={navStyles.activeNavLink} className={navStyles.navLink}>About</Link></Nav.Link>
      <NavDropdown title="Hikes" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/peakhikes">Peak Hikes</NavDropdown.Item>
        <NavDropdown.Item href="/mountsi">Mnt Si</NavDropdown.Item>
        <NavDropdown.Item href="/mailbox">Mailbox</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Blog" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/guide">Guide</NavDropdown.Item>
        <NavDropdown.Item href="/essentials">The Essentials</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
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
