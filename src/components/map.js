import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { env } from 'process';
import * as mapStyles from "./map.module.css"
import PropTypes from 'prop-types';

// mapboxgl.accessToken = env.REACT_APP_API_KEY1
mapboxgl.accessToken = "pk.eyJ1Ijoia2V2ZWsiLCJhIjoiM1JGdUlrOCJ9.E7X4iXStstLb_AzfjxAqLg"

export default function Map(props) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const mapstyle = props.mapstyle
    const [lng, setLng] = useState(props.Lng);
    const [lat, setLat] = useState(props.Lat);
    const [zoom, setZoom] = useState(14);
    console.log("env: " + env.REACT_APP_API_KEY1)
    
    useEffect(() => {
        if (map.current) return; // initialize map only once

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: mapstyle,
            pitch: 45,
            bearing: 0,
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
          setLng(map.current.getCenter().lng.toFixed(4));
          setLat(map.current.getCenter().lat.toFixed(4));
          setZoom(map.current.getZoom().toFixed(2));
        });
      });

    return (
                <div>
                    <div className={mapStyles.sidebar}>
                    { props.title }:<br />
                    Lng: {lng} | Lat: {lat}
                    </div>
                    <div ref={mapContainer} className={mapStyles.mapcontainer} />
                </div>
    );
}

Map.PropTypes = {
    title: PropTypes.string.isRequired,
    mapstyle: PropTypes.string.isRequired,
    Lng: PropTypes.number.isRequired,
    Lat: PropTypes.number.isRequired,
}