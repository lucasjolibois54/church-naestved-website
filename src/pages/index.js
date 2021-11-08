import * as React from "react";

//components
import Button from "../components/Button";
import ButtonVanilla from "../components/ButtonVanilla";
import ButtonTailwind from "../components/ButtonTailwind";
import Hero from "../components/Hero";
import ValueSec from "../components/ValuesSec";
import Hand from "../components/Hand";
import Event from "../components/Event";
import Footer from "../components/Footer";
import AboutHome from "../components/AboutHome";

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <Hero />
      <ValueSec />
      <AboutHome/>
      <Hand />
      <Event />
      <Footer />
    </main>
  );
};

export default IndexPage;

// styles
const pageStyles = {
  backgroundColor: "#F8F2E3",
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
