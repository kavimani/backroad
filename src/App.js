import About from "./Components/About";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Services from "./Components/Services";
import Tours from "./Components/Tours";

function App() {
  return (
    <>
      <NavBar />

      <Hero />

      <About />
      <Services></Services>
      <Tours />
      <Footer />
    </>
  );
}

export default App;
