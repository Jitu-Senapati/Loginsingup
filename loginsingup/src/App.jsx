import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Creators from "./components/Creators";
import Footer from "./components/Footer";
import "./styles/Home.css";

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
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

export default App;
