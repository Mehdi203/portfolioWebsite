import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Test.css";

const Test = () => (
  <div className="test">
    <div>
      <FontAwesomeIcon icon="check-square" />
      Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
    </div>
    <h1>Test</h1>
  </div>
);

export default Test;
