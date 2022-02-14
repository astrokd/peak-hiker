import React, { useRef, useEffect, useState } from 'react';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

import PropTypes from 'prop-types';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const apikey = process.env.GATSBY_API_KEY1

const Mapbox = ReactMapboxGl({
    accessToken:
    `${apikey}`
});

const ReMap = ( props ) => {
    const mapstyle = props.mapstyle
    const lng = props.Lng;
    const lat = props.Lat;
    const zoom = props.zoom || 13;
    const pitch = props.pitch || 50;
    const bearing = props.bearing || 30;
    return (
      <Container>
        <Row>
            <Col>
                ReactMapBoxGL
                <Mapbox
                    style={mapstyle}
                    containerStyle={{
                        height: '80vh',
                        width: '80vw'
                    }}
                    zoom = {[zoom]}
                    center={[lng, lat]}
                    pitch={[pitch]}
                    bearing={[bearing]}
                >
                </Mapbox>
          </Col>
        </Row>
      </Container>
    )
}

export default ReMap


ReMap.PropTypes = {
    title: PropTypes.string.isRequired,
    mapstyle: PropTypes.string.isRequired,
    Lng: PropTypes.number.isRequired,
    Lat: PropTypes.number.isRequired,
    zoom: PropTypes.number,
    pitch: PropTypes.number,
    bearing: PropTypes.number,
}