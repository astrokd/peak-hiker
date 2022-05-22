import React from 'react'
import Image from 'react-bootstrap/Image'
import * as iconStyles from "./icon.module.css"

const Icon = ( data ) => {
    const icons = data.icons.allFile.nodes
    const icon = icons.filter(icon => icon.name === data.name )
    return (
      <div className={iconStyles.icon}>
        <Image src={icon[0].publicURL} alt={data.alt} width="28" height="28" title={data.alt}/> 
      </div>
    )
}

export default Icon