import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import "bootstrap/js/src/collapse.js"; //fixes toggle navbar
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
