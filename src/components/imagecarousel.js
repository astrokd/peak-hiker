import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

const ImageCarousel = ( data ) => {
  const imgArray = data.img.allFile.nodes
    return (
      <Container>
        <Row>
        <Col>
        <Carousel fade>
          {imgArray.map((img, index) => (
            <Carousel.Item key={index} className="text-center" >
              <GatsbyImage 
                image={getImage(img.childImageSharp)} 
                alt={img.name}
                style={{maxHeight: 640}} 
              />
              <Carousel.Caption>
                <h3>{img.name}</h3>
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


