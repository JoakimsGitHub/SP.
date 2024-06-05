import React from "react";
import { aboutData } from "./aboutData";
import "./aboutStyle.css";

function About() {
  return (
    <>
      <div className="about">
        <h1>Support your team!</h1>
        <h2>{aboutData["whoWeAre"].heading}</h2>
        <p>{aboutData["whoWeAre"].paragraph}</p>
        <h2>{aboutData["whatWeDo"].heading}</h2>
        <p>{aboutData["whatWeDo"].paragraph}</p>
      </div>
    </>
  );
}

// Accessing dynamic properties using bracket notation. Object properties are not numerical array indices but I can iterate over the keys i na specific order by first converting the keys into elements.

//    const keys = Object.keys(aboutData);
//         <h2>{aboutData[keys[0]].heading}</h2>
//         <p>{aboutData[keys[0]].paragraph}</p>
//         <h2>{aboutData[keys[1]].heading}</h2>
//         <p>{aboutData[keys[1]].paragraph}</p>
