import React, { useRef, useEffect, useState } from 'react';

import MapboxGl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as mapStyles from "./map.module.css"
import PropTypes from 'prop-types';
import 'mapbox-gl/dist/mapbox-gl.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const apikey = process.env.GATSBY_API_KEY1

MapboxGl.accessToken = `${apikey}`

let loadstatus = false

const MapImage = (props) => {
    return (
        <GatsbyImage 
            image={getImage(props.mapImg)} 
            alt="placeholder" 
        />
    )
}

export default function Map(props) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const mapstyle = props.mapstyle
    const [lng, setLng] = useState(props.Lng);
    const [lat, setLat] = useState(props.Lat);
    const [zoom, setZoom] = useState(props.zoom || 14);
    const pitch = props.pitch || 45;
    const bearing = props.bearing || 0;
    const staticMapImg = props.staticMapImg
    
    useEffect(() => {
        if (map.current) return; // initialize map only once

        map.current = new MapboxGl.Map({
            container: 'map',
            name: "peak",
            style: mapstyle,
            pitch: pitch,
            bearing: bearing,
            center: [lng, lat],
            zoom: zoom
        });
        map.current.on('load', () => {
            map.current.resize();
        });

    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
          setLng(map.current.getCenter().lng.toFixed(4));
          setLat(map.current.getCenter().lat.toFixed(4));
          setZoom(map.current.getZoom().toFixed(12));
          map.current.resize();
        });
      });

    return (
        <Container>
            <Row>
                <Col id="map" className={mapStyles.mapcontainer}>
                    {loadstatus 
                        ? <div ref={mapContainer} className={mapStyles.mapcontainer} />
                        : <MapImage mapImg={staticMapImg.mapImage.childImageSharp}/> }
                </Col>
            </Row>
        </Container>
    );
}



Map.PropTypes = {
    title: PropTypes.string.isRequired,
    mapstyle: PropTypes.string.isRequired,
    Lng: PropTypes.number.isRequired,
    Lat: PropTypes.number.isRequired,
    zoom: PropTypes.number,
    pitch: PropTypes.number,
    bearing: PropTypes.number,
    staticMapImg: PropTypes.string.isRequired,
}
