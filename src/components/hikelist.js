import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

const HikeList = ( {listTitle, hikePages} ) => {
    return (
      <Container>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item variant="primary">{ listTitle }</ListGroup.Item>
              {hikePages.map( (page, id) => (
                <ListGroup.Item key={id}>
                  <Link to={page.path}>{page.pageContext.frontmatter.title}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
}

HikeList.propTypes = {
  listTitle: PropTypes.string,
  hikePages: PropTypes.array,
}

export default HikeList
