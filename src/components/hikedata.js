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
        <Card border="info" className='mb-2' >
            <Card.Header>Hike Stats:</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Peak Elevation: {peakheight} ft</Card.Subtitle>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Distance: {distance} mi</ListGroup.Item>
                    <ListGroup.Item>Elevation gain: {elevation} ft</ListGroup.Item>
                </ListGroup>
            </Card.Body>
            <Card.Footer>
                <Card.Link href={wtaurl} target="_blank" rel="noreferrer">WTA.org hike link</Card.Link>
                <Card.Link href={alltrailsurl} target="_blank" rel="noreferrer">AllTrails.com hike link</Card.Link>
            </Card.Footer>
        </Card>
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
