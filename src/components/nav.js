import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Dropdown from 'react-bootstrap/Dropdown'

const BurgerIcon = () => {
    return (
        <svg height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z"/>
        </svg>
    )
}

const Nav = () => {
    return (
        <Dropdown style={{
            float: 'right',
          }}>
            <Dropdown.Toggle style={{
                background: 'white',
                }}>
                <BurgerIcon />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item><Link to="/">Home</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/page-2">Page 2</Link></Dropdown.Item>
                <Dropdown.Item>Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Nav