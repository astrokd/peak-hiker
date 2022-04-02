import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

export default function HikeData(props) {
    const title = props.title || "title"
    const alltrailsurl = props.alltrailsurl || "https://www.alltrails.com/"
    const wtaurl = props.wtaurl || "https://www.wta.org/"
    const distance = props.distance
    const elevation = props.elevation
    const peakheight = props.peakheight

    return (
        <Container>
            <Card border="light" >
                <Card.Header>Hike Stats</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Distance: {distance} mi</ListGroup.Item>
                    <ListGroup.Item>Elevation gain: {elevation} ft</ListGroup.Item>
                    <ListGroup.Item>Peak Elevation: {peakheight} ft</ListGroup.Item>
                </ListGroup>
                <Card.Footer>
                    <Card.Link href={wtaurl} target="_blank" rel="noreferrer">WTA.org hike link</Card.Link>
                    <Card.Link href={alltrailsurl} target="_blank" rel="noreferrer">AllTrails.com hike link</Card.Link>
                </Card.Footer>
            </Card>
        </Container>
    );
}

HikeData.propTypes = {
    title: PropTypes.string.isRequired,
    alltrailsurl: PropTypes.string.isRequired,
    wtaurl: PropTypes.string.isRequired,
    distance: PropTypes.string.isRequired,
    elevation: PropTypes.string.isRequired,
    peakheight: PropTypes.string.isRequired,
}
