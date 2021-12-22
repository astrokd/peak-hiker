import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Image = () => {
    return (
      <StaticImage src='../images/peak-hikes.png' 
        alt="view from a mountain peak"
        placeholder="blurred"
      />
    )
}
export default Image
