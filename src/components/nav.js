import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Dropdown from 'react-bootstrap/Dropdown'

const Nav = () => {
    return (
        <Dropdown style={{
            float: 'right',
          }}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Nav