import React from "react";
import { whoAndWhat } from "./aboutData";
import "./aboutStyle.css";

function About() {

  // The passed index parameter is used as key attribute value.
  // The content of the two HTML elements are the property values of the element's object.
  // Each element is an object with keys.
  function renderAbout() {
    return whoAndWhat.map((object, index) => (
      <div key={index}>
        <h2>{object.heading}</h2>
        <p>{object.paragraph}</p>
      </div>
    ));
  }

  return (
    <>
      <div className="about">
        <h1>Support your team!</h1>
        {renderAbout()}
      </div>
    </>
  );
}

export default About;
