import React from "react";
import "./aboutStyle.css";

function About() {
  const whoWeAreP =
    "Best Referee fielder soccer striker one-two goalie yellow card center-half three-five-two goal Hire Cup of Nations pitch forward number 10 brace. Three-five-two referee hat trick forward one-two halftime number 10 goalie pitch goal midfielder defender ball UEFA.";

  const whatWeDoP =
    "European Championship four-four-two center-half brace. Center-half Cup of Nations red card chip goalie UEFA European Championship ball one-two upper 90 pitch defender yellow card forward. Red card goalie one-two hat trick three-five-two halftime number 10 center-half Cup of Nations soccer brace chip upper 90 ball four-four-two.";

  return (
    <>
      <div className="about">
        <h1>Support your team!</h1>
        <h2>Who we are</h2>
        <p>{whoWeAreP}</p>
        <h2>What we do</h2>
        <p>{whatWeDoP}</p>
      </div>
    </>
  );
}

export default About;
