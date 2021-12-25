import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNodeJs,
  faReact,
  faPython,
  faAppStore,
} from "@fortawesome/free-brands-svg-icons";
// import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faDesktop,
  faFileCode,
  faSquareFull,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div>
      <div className="skills">
        <h1 className="py-5">My Expertise</h1>

        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon icon={faNodeJs} size="2x" />
                </div>
                <h3>Node JS</h3>
                <p>node js</p>
              </div>
            </div>

            <div className="col-md-2 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon icon={faReact} size="2x" />
                </div>
                <h3>React</h3>
                <p>react</p>
              </div>
            </div>

            <div className="col-md-2 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon icon={faCode} size="2x" />
                </div>
                <h3>JavaScript</h3>
                <p>javascript</p>
              </div>
            </div>

            <div className="col-md-2 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon icon={faPython} size="2x" />
                </div>
                <h3>Python</h3>
                <p>python</p>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon icon={faDesktop} size="2x" />
                </div>
                <h3>C#</h3>
                <p>c#</p>
              </div>
            </div>

            <div className="col-md-2 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon icon={faDatabase} size="2x" />
                </div>
                <h3>SQL</h3>
                <p>sql</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
