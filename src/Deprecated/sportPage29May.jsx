import React, { useState } from "react";
import SportCard from "../sportFolder/sportCard.jsx";
import Sport from "../sportFolder/sport.jsx";
import sportCardData from "../sportFolder/sportCardData";
import sportSectionData from "../sportFolder/sportSectionData";
import "./pageStyle.css";

function SportPage() {
  const [currentSection, setCurrentSection] = useState("landingSection");

  // Updating the state variable based on user interaction.
  function updatingSection(newSportSection) {
    setCurrentSection(newSportSection);
  }

  function renderContent() {
    if (currentSection === "landingSection") {
      return renderLandingSection();
    } else {
      return renderSportSection();
    }
  }

  // Mapping over the imported sportCardData object array to render each card.
  function renderLandingSection() {
    return (
      <div className="landing">
        {sportCardData.map((cardData, index) => (
          <div key={index}>
            <SportCard
              key={index}
              sport={cardData.sport}
              isApplicable={cardData.isApplicable}
              isAvailable={cardData.isAvailable}
              image={cardData.image}
              buttonText={cardData.buttonText}
            />
            <button
              onClick={() =>
                updatingSection(`${cardData.sport.toLowerCase()}Section`)
              }
            >
              Explore {cardData.sport}
            </button>
          </div>
        ))}
      </div>
    );
  }

  function getSportDetails(currentSection) {
    switch (currentSection) {
      case "footballSection":
        return {
          sportSection: "football",
          sportImage: "src/imageFolder/football.jpg",
        };
      case "handballSection":
        return {
          sportSection: "handball",
          sportImage: "src/imageFolder/handball.jpeg",
        };
      case "basketballSection":
        return {
          sportSection: "basketball",
          sportImage: "src/imageFolder/basketball.jpeg",
        };
      case "rugbySection":
        return {
          sportSection: "rugby",
          sportImage: "src/imageFolder/rugby.jpeg",
        };
      default:
        return { sportSection: "", sportImage: "" };
    }
  }

  

  // Returning the output of the function as an object and destructuring it.
  const { sportSection, sportImage } = getSportDetails(currentSection);

  function renderSportSection() {
    return (
      <div className="sport">
        <Sport sport={sportSection} image={sportImage} />
      </div>
    );
  }

  return <div className="sportPage">{renderContent()}</div>;
}

export default SportPage;
