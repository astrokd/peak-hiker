import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'

const Image = ({ children }) => {
    return (
      <Container>
        <Row>
          <Col>
            {children}
          </Col>
        </Row>
      </Container>
    )
}

Image.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Image
