import React from "react";
import "./Exprience.css";

const Experience = () => {
  return (
    <div id="exprience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Software Developer</h3>
            <h4>Subterra Energy Consulting</h4>
            <h5>2020-2021</h5>
            <ul>
              <li>
                Developed an application using Python & MATLAB to model
                electromagnetic heating to produce from oil-sands
              </li>
              <li>
                Conducted QA on the application, evaluating new functionality
                and regression testing current features
              </li>
              <li>
                Prepared documentation throughout the software development life
                cycle
              </li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Reservoir Engineer-Product Manager</h3>
            <h4>Stratum Reservoir</h4>
            <h5>2018-2020</h5>
            <ul>
              <li>
                Collaborated with Stratum IsoLogica software team in design and
                test software features and improvements{" "}
              </li>
              <li>
                Worked closely with engineers to apply AI-based algorithms for
                anomaly detection and predictive analytic{" "}
              </li>
              <li>
                Actively participated in Agile development to estimate effort
                and complexity of new features requested by clients
              </li>
              <li>
                Designed and implemented automated scripts and workfows to
                facilitate the movement of SQL data between systems and data
                sources{" "}
              </li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Reservoir Engineer-Software Support</h3>
            <h4>Weatherford Canada</h4>
            <h5>2015-2018</h5>
            <ul>
              <li>
                Provided technical support for Weatherford’s Engineering
                Software Suite
              </li>
              <li>
                Deployed a robust anomaly detection algorithm to filter out
                invalid data using Python{" "}
              </li>
              <li>
                Led reservoir simulation and modeling studies. Utilized SQL,
                JavaScript, Simulation tools and Python for data assimilation,
                uncertainty analysis and optimization and improvement
              </li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Reservoir Engineer-Data Analyst</h3>
            <h4>Weatherford Canada</h4>
            <h5>2012-2015</h5>
            <ul>
              <li>
                Led a team of engineers and geoscientists to conduct numerical
                simulation projects. Combined data analytics, engineering, and
                economic analysis to optimize development plans and automate
                workflows
              </li>
              <li>
                Developed an algorithm to collect field data and optimize the
                location of flow control devices for SAGD wells
              </li>
              <li>
                Designed a modeling workflow to optimize hydraulic fracturing
                operations and achieved 20-40% increase in Net Present
                Value(NPV)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
