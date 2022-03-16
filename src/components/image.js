import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


// import { StaticImage } from "gatsby-plugin-image"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Image = ( data ) => {
  // console.log(data.img.allFile.nodes[0])
    return (
      <Container>
        <Row>
          <Col className="text-center">
            <h3>{ data.alt }</h3>
            <GatsbyImage 
              image={getImage(data.img.mountainImage.childImageSharp)} 
              alt={data.alt} 
            />
            <p>{ data.description }</p>
          </Col>
        </Row>
      </Container>
    )
}

export default Image


