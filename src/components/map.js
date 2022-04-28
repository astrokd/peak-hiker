import React, { useRef, useEffect, useState } from 'react';

import MapboxGl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import * as mapStyles from "./map.module.css"
import PropTypes from 'prop-types';
import 'mapbox-gl/dist/mapbox-gl.css';

import Container from 'react-bootstrap/Container'

// eslint-disable-next-line no-undef
const apikey = process.env.GATSBY_API_KEY1
MapboxGl.accessToken = `${apikey}`
let loadstatus = false

const MapImage = (props) => {
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 600, height: 400 });
    const status = props.status
    const imgLoc = props.Lng + "," + props.Lat + "," + props.zoom + "," + props.bearing + "," + props.pitch
    const imgHeight = props.height || "400"
    const imgWidth = dimensions.width || "500"
    const imgSize = "/" + imgHeight + "x" + imgWidth
    const imgtoken = "?access_token=" + apikey
    const imgSrc = "https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/"
    const mapContainer = props.mapContainer

    console.log("width: " + imgWidth)

    useEffect(() => {
        if (targetRef.current) {
          setDimensions({
            width: targetRef.current.offsetWidth,
            height: targetRef.current.offsetHeight
          });
        }
      }, []);

    if (status) {
        return (
            <div ref={mapContainer} className={mapStyles.mapcontainer} />
        )
    } else {
        return (
            <Container ref={targetRef} id="staticmap">
                {console.log("in MapImage width: " + dimensions.width)}
                <img src={imgSrc + imgLoc + imgSize + imgtoken}  alt="static MapBox map" />
            </Container>
        )
    }
    
}

export default function Map(props) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const mapstyle = props.mapstyle || "mapbox://styles/kevek/cl2i2uhl4001r14mjpxg4o5rj"
    const [lng, setLng] = useState(props.Lng);
    const [lat, setLat] = useState(props.Lat);
    const [zoom, setZoom] = useState(props.zoom || 14);
    const pitch = props.pitch || 45;
    const bearing = props.bearing || 0;
    
    useEffect(() => {
        if (map.current) return; // initialize map only once

        console.log("on useEffect in if map.current ")

        map.current = new MapboxGl.Map({
            container: 'map',
            name: "peak",
            style: mapstyle,
            pitch: pitch,
            bearing: bearing,
            center: [lng, lat],
            zoom: zoom,
            height: "400px",
        });
        map.current.on('load', () => {
            map.current.resize();
            loadstatus = true;
        });

    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
          setLng(map.current.getCenter().lng.toFixed(4));
          setLat(map.current.getCenter().lat.toFixed(4));
          setZoom(map.current.getZoom().toFixed(12));

        });
      });

    return (
        <Container id="map" className={mapStyles.mapcontainer}>
                <div ref={mapContainer} className={mapStyles.mapcontainer} />
                    {/* {console.log("in Map return height x width: ", imgheight + " x " + imgwidth)}
                    <MapImage Lat={lat} Lng={lng} bearing={bearing} pitch={pitch} zoom={zoom} mapContainer={mapContainer} status={loadstatus}/> */}
        </Container>
    );
}

MapImage.propTypes = {
    Lng: PropTypes.number.isRequired,
    Lat: PropTypes.number.isRequired,
    zoom: PropTypes.number,
    pitch: PropTypes.number,
    bearing: PropTypes.number,
    status: PropTypes.bool,
    mapContainer: PropTypes.object,
    height: PropTypes.string,
    width: PropTypes.string,
}

Map.propTypes = {
    title: PropTypes.string.isRequired,
    mapstyle: PropTypes.string,
    Lng: PropTypes.number.isRequired,
    Lat: PropTypes.number.isRequired,
    zoom: PropTypes.number,
    pitch: PropTypes.number,
    bearing: PropTypes.number,
}
