import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"


// import { StaticImage } from "gatsby-plugin-image"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// export const StaticQuery = graphql`
//   query {
//     file(relativePath: {eq: "mountrainer.webp"}) {
//       childImageSharp {
//         fixed {
//           ...GatsbyImageSharpFixed
//         }
//         gatsbyImageData(height: 10, width: 10, placeholder: BLURRED, formats: NO_CHANGE)
//       }
//       name
//       relativePath
//     }
//   }
// `

const Image = () => {
  console.log("Image")
    return (
      <Container>
        <Row>
          <Col>
            <h3>Mount Rainer</h3>
            <StaticQuery
              query={graphql`
                query ImageQuery {
                  file(relativePath: {eq: "mountrainer.webp"}) {
                    childImageSharp {
                      fixed {
                        ...GatsbyImageSharpFixed
                      }
                      gatsbyImageData(height: 10, width: 10, placeholder: BLURRED, formats: NO_CHANGE)
                    }
                    name
                    relativePath
                  }
                }
              `}
              render={data => (
                <header>
                  <h1>{data.file.childImagesSharp}</h1>
                </header>
              )}
            />
            <p>View of a mountain top</p>
          </Col>
        </Row>
      </Container>
    )
}

export default Image
