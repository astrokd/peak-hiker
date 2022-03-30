import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container'

export default function ExternalLink(props) {
    const url = props.url
    const text = props.text

    return (
        <Container>
            <a href={url} target="_blank" rel="noreferrer">{text}</a>
        </Container>
    );
}

ExternalLink.propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}