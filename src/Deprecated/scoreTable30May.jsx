import React, { useState } from "react";
import ScoreData from "./scoreData.jsx";
import "../sportStyle.css";

// Returns an object specific to the sport string from the props.
function setScoreTable(sport) {
  switch (sport) {
    case "football":
      return {
        divClass: "card",
        sectionClass: "sport",
        image: "src/imageFolder/football.jpg",
        imageAlt: "Image of a football",
        heading: "Football Result",
        buttonText: "Football Button",
      };
    case "handball":
      return {
        divClass: "card",
        sectionClass: "sport",
        image: "src/imageFolder/handball.jpeg",
        imageAlt: "Image of a handball",
        heading: "Handball Result",
        buttonText: "Handball Button",
      };
    case "basketball":
      return {
        divClass: "card",
        sectionClass: "sport",
        image: "src/imageFolder/basketball.jpeg",
        imageAlt: "Image of a basketball",
        heading: "Basketball Result",
        buttonText: "Basketball Button",
      };
    case "rugby":
      return {
        divClass: "card",
        sectionClass: "sport",
        image: "src/imageFolder/rugby.jpeg",
        imageAlt: "Image of a rugby",
        heading: "Rugby Result",
        buttonText: "Rugby Button",
      };
    default:
      return null;
  }
}

function ScoreTable(props) {
  const { sport } = props;

  // const [currentScore, setCurrentScore] = useState()
  //   = sportSectionData[currentSection];

  // The score data is the returned object that holds the key-values used as JS expressions for the content.
  const scoreTable = setScoreTable(sport);

  // If no matching sport is found, scoreTable will be null. Handle this case.
  if (!scoreTable) {
    return <div>Invalid sport</div>;
  }

  // Deconstructing the scoreTable object into individual variables for use in JSX.
  const { divClass, sectionClass, image, imageAlt, heading, buttonText } =
    scoreTable;

  // Render the component using the set variables from the key-value pairs from the scoreTable object.
  return (
    <div className={divClass}>
      <section className={sectionClass}>
        <img src={image} alt={imageAlt} />
        <h2>{heading}</h2>
        <button>{buttonText}</button>
      </section>
      <section>
        <ScoreData sport={sport} />
      </section>
    </div>
  );
}

export default ScoreTable;
