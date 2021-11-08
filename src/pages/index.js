import * as React from "react"


//components
import Button from "../components/Button"
import ButtonVanilla from "../components/ButtonVanilla"
import ButtonTailwind from "../components/ButtonTailwind"
import Hero from "../components/Hero"
import ValueSec from "../components/ValuesSec"


// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Congratulations!{" "}🎉
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
      </h1>
      <Hero />
      <ValueSec />

    </main>
  )
}

export default IndexPage

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
