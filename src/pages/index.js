import * as React from "react";

//components
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import ValueSec from "../components/ValuesSec";
import Hand from "../components/Hand";
import Podcast from "../components/Podcast";
import Event from "../components/Event";
import Index from "../components/Index";
import Footer from "../components/Footer";
import AboutHome from "../components/AboutHome";
import Findos from "../components/Findos.js";
import Kontakt from "../components/Kontakt.js";

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div style={gridLayout}>
        <title>Næstved Provsti</title>
        <Navigation />
        <Hero />
        <ValueSec />
        <AboutHome />
        <Hand />
        <Podcast />
        <Event />
        <Index />
        <Findos />
        <Kontakt />
        <Footer />
      </div>
    </main>
  );
};

export default IndexPage;

// styles
const gridLayout = {
  /*maxWidth: 2000,*/
};

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
