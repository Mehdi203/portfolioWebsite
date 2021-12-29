import React from "react";
import "./Exprience.css";

const Experience = () => {
  return (
    <div className="experience">
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
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              omnis laboriosam odio deserunt reprehenderit optio cum ratione
              sequi pariatur deleniti iste perspiciatis officiis minima iusto
              hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque
              delectus asperiores et quas qui.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Reservoir Engineer-Product Manager</h3>
            <h4>Stratum Reservoir</h4>
            <h5>2018-2020</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              omnis laboriosam odio deserunt reprehenderit optio cum ratione
              sequi pariatur deleniti iste perspiciatis officiis minima iusto
              hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque
              delectus asperiores et quas qui.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Reservoir Engineer-Software Support</h3>
            <h4>Weatherford Canada</h4>
            <h5>2015-2018</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              omnis laboriosam odio deserunt reprehenderit optio cum ratione
              sequi pariatur deleniti iste perspiciatis officiis minima iusto
              hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque
              delectus asperiores et quas qui.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Reservoir Engineer-Data Analyst</h3>
            <h4>Weatherford Canada</h4>
            <h5>2012-2015</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              omnis laboriosam odio deserunt reprehenderit optio cum ratione
              sequi pariatur deleniti iste perspiciatis officiis minima iusto
              hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque
              delectus asperiores et quas qui.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
