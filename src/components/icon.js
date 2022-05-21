import React from 'react'
import Image from 'react-bootstrap/Image'

const Icon = ( data ) => {
    const icons = data.icons.allFile.nodes
    const icon = icons.filter(icon => icon.name === data.name )
    return (
      <div>
        <img src={icon[0].publicURL} alt={data.alt} width="30" height="30"/> 
      </div>
    )
}

export default Icon