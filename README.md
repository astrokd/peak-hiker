# Peak Hiker

Created with Gatsbyjs gatsby-starter-mdx-basic

[Peak Hiker Public site](https://peakhiker.gatsbyjs.io/)

Using React-Bootstrap

## Site Map

        Home 
          |---- About
          |---- Hikes
          |-------- Mount Si
          |-------- MailBox
          |-------- ....
          |---- Blog
          |-------- Essentials
          |-------- Guide
          |-------- ...

## Adding Images

Found problem with some smaller images not loading, need to come up with a way to work.

[Using the Gatsby Image plugin](https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image)

## Adding Mapbox map

Adding a 3d map for each peak hike, used the below mapbox tutorial;

[Use MapBox GL JS in a React app Tutorial](https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/)

## Adding Static Images from Mapbox

Using the Static Images API [https://docs.mapbox.com/playground/static/](https://docs.mapbox.com/playground/static/)

### Parts of a Mapbox static map query

- API query and Map Style: `https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/`
- Longitude and Latitude: `-121.6585,47.4642`
- Zoom, Bearing, Pitch: `,13,70,50`
- Image Height and Width: `/800x400`
- API Token: `?access_token={---MAPBOX access token---}`

## Using MDX pages

[Writing Pages in MDX Gatsbyjs docs](https://www.gatsbyjs.com/docs/mdx/writing-pages/)
