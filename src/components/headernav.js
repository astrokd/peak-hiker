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
    <Nav className="me-auto text-end px-4">
      <Nav.Item className="py-2"><Link to="/" activeClassName={navStyles.activeNavLink} className={navStyles.navLink}>Home</Link></Nav.Item>
      <Nav.Item className="py-2"><Link to="/about" activeClassName={navStyles.activeNavLink} className={navStyles.navLink}>About</Link></Nav.Item>
      <NavDropdown title="Hikes" id="collasible-nav-dropdown">
        <Nav.Item><Link to="/peakhikes" activeClassName={navStyles.activeNavLink} className={navStyles.navMenuLink}>Peak Hikes</Link></Nav.Item>
        <Nav.Item><Link to="/mountsi" activeClassName={navStyles.activeNavLink} className={navStyles.navMenuLink}>Mount Si</Link></Nav.Item>
        <Nav.Item><Link to="/mailbox" activeClassName={navStyles.activeNavLink} className={navStyles.navMenuLink}>Mailbox</Link></Nav.Item>
      </NavDropdown>
      <NavDropdown title="Blog" id="collasible-nav-dropdown">
        <Nav.Item><Link to="/guide" activeClassName={navStyles.activeNavLink} className={navStyles.navMenuLink}>Guide</Link></Nav.Item>
        <Nav.Item><Link to="/essentials" activeClassName={navStyles.activeNavLink} className={navStyles.navMenuLink}>The Essentials</Link></Nav.Item>
        <NavDropdown.Divider />
        <Nav.Item><Link to="/blog" activeClassName={navStyles.activeNavLink} className={navStyles.navMenuLink}>Blog</Link></Nav.Item>
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
