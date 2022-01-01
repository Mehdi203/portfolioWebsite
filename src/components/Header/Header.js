import React from "react";
// import Particle from "./Particle";
import Typed from "react-typed";
import "./Header.css";

const Header = () => {
  return (
    <div>
      {/* <Particlße /> */}
      <div className="header-wraper">
        <div className="main-info">
          <h1>Welcome to My Website</h1>
          <Typed
            className="typed-text"
            // strings={["Web Design", "Software Application", "We Development"]}
            strings={["Hi, I'm Mehdi, Software Developer Based in Canada"]}
            typeSpeed={100}
            backSpeed={40}
            loop
          />
          <a href="/#" className="btn-main-offer">
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
