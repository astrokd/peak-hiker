import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Image = () => {
    return (
      <Container>
        <Row>
          <Col>
            <StaticImage src="../images/mountrainer.webp"
              alt="view of a mountain peak"
              placeholder="blurred"
            />
          </Col>
        </Row>
      </Container>
    )
}

export default Image
