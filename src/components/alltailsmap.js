import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Accordion } from 'react-bootstrap';

export default function AllTrailsMap(props) {
    const allTrailsHike = props.hike
    const url = "https://www.alltrails.com/widget/trail/us/washington/" + allTrailsHike + "?u=i"

    return (
        <Container>
            <Row>
                <Accordion>
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>All Trails Map {allTrailsHike}</Accordion.Header>
                        <Accordion.Body>
                        <iframe 
                            className="alltrails" 
                            src={url} 
                            width="100%" height="400" 
                            frameBorder="0" 
                            scrolling="no" marginHeight="0" 
                            marginWidth="0" 
                            title="AllTrails: Trail Guides and Maps for Hiking, Camping, and Running">
                        </iframe>
                        </Accordion.Body> 
                    </Accordion.Item>
                </Accordion>
            </Row>
        </Container>
    );
}

AllTrailsMap.PropTypes = {
    hike: PropTypes.string.isRequired,
}