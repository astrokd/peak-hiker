import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Container from 'react-bootstrap/Container'

import HeaderNav from './headernav'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        allSitePage(filter: {path: {glob: "/hikes/*"}}) {
          nodes {
            id
            pageContext
            path
          }
        }
      },
    `}
    render = {data => (
      <>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
          />
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
            rel="stylesheet"
          />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Create a React web app that uses Mapbox GL JS to render a map"
          />
          <script src="https://kit.fontawesome.com/13b55edbfb.js" crossOrigin="anonymous"></script>
        </Helmet>
        <HeaderNav siteTitle={data.site.siteMetadata.title} sitePages={data.allSitePage.nodes}/>
        <Container>
          {children}
          <div id="map"></div>
        </Container>
        <Footer />
        <script src='https://api.mapbox.com/mapbox-assembly/mbx/v0.18.0/assembly.js'></script>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
