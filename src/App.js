import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import "bootstrap/js/src/collapse.js"; //fixes toggle navbar
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Particle from "./components/Header/Particle";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
// import Test from "./components/Test/Test";
import Exprience from "./components/Exprience/Exprience";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <div>
      <Particle />
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Exprience />
      <Portfolio />
      <Contacts />
      {/* <Test /> */}
    </div>
  );
}

export default App;
