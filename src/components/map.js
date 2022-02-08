import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import * as mapStyles from "./map.module.css"
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

const Map = ( props ) => {
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
                    <Layer>
                        <Feature coordinates={[lng, lat]} />
                    </Layer>
                </Mapbox>
          </Col>
        </Row>
      </Container>
    )
}

export default Map


// mapboxgl.accessToken = `${apikey}`

// export default function Map(props) {
//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const mapstyle = props.mapstyle
//     const [lng, setLng] = useState(props.Lng);
//     const [lat, setLat] = useState(props.Lat);
//     const [zoom, setZoom] = useState(14);
    
//     useEffect(() => {
//         if (map.current) return; // initialize map only once

//         map.current = new mapboxgl.Map({
//             container: mapContainer.current,
//             style: mapstyle,
//             pitch: 45,
//             bearing: 0,
//             center: [lng, lat],
//             zoom: zoom
//         });
//     });

//     useEffect(() => {
//         if (!map.current) return; // wait for map to initialize
//         map.current.on('move', () => {
//           setLng(map.current.getCenter().lng.toFixed(4));
//           setLat(map.current.getCenter().lat.toFixed(4));
//           setZoom(map.current.getZoom().toFixed(2));
//         });
//       });

//     return (
//         <Container>
//             <Row>
//                 <Col>
//                     <div className={mapStyles.sidebar}>
//                     { props.title }:<br />
//                     Lng: {lng} | Lat: {lat}
//                     </div>
//                     <div ref={mapContainer} className={mapStyles.mapcontainer} />
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

Map.PropTypes = {
    title: PropTypes.string.isRequired,
    mapstyle: PropTypes.string.isRequired,
    Lng: PropTypes.number.isRequired,
    Lat: PropTypes.number.isRequired,
    zoom: PropTypes.number,
    pitch: PropTypes.number,
    bearing: PropTypes.number,
}