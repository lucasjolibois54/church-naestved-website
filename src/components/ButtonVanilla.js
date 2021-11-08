import React from 'react'

//Det her eksempel bruger ikke styled-components

/* husk at Funktionens navn ikke må være ens 
med consts fra stylingen ligesom i det andet eksempel */

function ButtonVanilla() {
    return (
        <div>
            <h2 style={headingStyles}>Hello World</h2>
        </div>
    )
}

export default ButtonVanilla

const headingStyles = {
  color: "#FF0000",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}