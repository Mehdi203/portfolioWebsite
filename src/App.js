import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import "bootstrap/js/src/collapse.js"; //fixes toggle navbar
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Particle from "./components/Header/Particle";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <Particle />
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;
