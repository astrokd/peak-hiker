import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


// import { StaticImage } from "gatsby-plugin-image"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

const imgArr = [
  "https://via.placeholder.com/640",
  "https://via.placeholder.com/480",
  "https://via.placeholder.com/820/000000/FFFFFF",
  "https://via.placeholder.com/960/0000FF/808080"
];

const ImageCarousel = ( data ) => {
    return (
      <Container>
        <Row>
        <Col>
        <Carousel>
          {imgArr.map((img, index) => (
            <Carousel.Item key={index} className="text-center">
              <img
                className="d-block w-80"
                src={img}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
          </Carousel>
          </Col>
        </Row>
      </Container>
    )
}

export default ImageCarousel


