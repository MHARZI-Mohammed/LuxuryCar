import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Fleet from "./components/Fleet";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Booking />
      <Contact />
      <Footer />
    </>
  );
}