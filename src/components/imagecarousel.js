import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


// import { StaticImage } from "gatsby-plugin-image"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

const ImageCarousel = ( data ) => {
    return (
      <Container>
        <Row>
        <Col className="text-center">
        <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-80"
                src="https://via.placeholder.com/640"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-80"
                src="https://via.placeholder.com/820/000000/FFFFFF"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-80"
                src="https://via.placeholder.com/960/0000FF/808080"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </Col>
        </Row>
      </Container>
    )
}

export default ImageCarousel


