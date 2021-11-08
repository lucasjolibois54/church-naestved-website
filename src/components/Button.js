import React from 'react'

function Button() {
    return (
        <div>
            <button style={buttonStyles}>Click me</button>
        </div>
    )
}

export default Button

const buttonStyles = {
    color: "#232129",
    backgroundColor: "#2abb9b",
    padding: 10,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }
