import React from "react";
import ScoreData from "./scoreData.jsx";
import { scoreTableData } from "./scoreTableData.jsx";
import "../sportStyle.css";

function ScoreTable(props) {
  const { sport } = props;

  // Conditionally rendering the table content based on the sport, used as index for the string key of the array.
  const scoreTable = scoreTableData[sport];

  // Getting the image as the value of one of the current object's keys.
  const backgroundImage = scoreTable
    ? {
        backgroundImage: `url(${scoreTable.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  // console.log("Score Table:", scoreTable);
  // console.log("Background Image Style:", backgroundImage);

  return (
    <div className="scoreTable">
      {scoreTable ? (
        <div className={sport} style={backgroundImage}>
          <section className={scoreTable.sectionClass}>
            <h2>{scoreTable.heading}</h2>
            <button>{scoreTable.buttonText}</button>
          </section>
          <section>
            <ScoreData sport={sport} />
          </section>
        </div>
      ) : (
        <div>No available table</div>
      )}
    </div>
  );
}

export default ScoreTable;
