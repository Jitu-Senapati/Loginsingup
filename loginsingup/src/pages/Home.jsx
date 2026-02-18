// pages/Home.jsx
// This file combines all sections together to build the full homepage

import "../styles/Home.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Creators from "../components/Creators";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Hero Section with parallax animation */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Creators Section */}
      <Creators />

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default Home;
