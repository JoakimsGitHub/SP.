import React, { useState } from "react";
import SportCard from "../sportFolder/sportCard.jsx";
import SportSection from "../sportFolder/sportSection.jsx";
import { sportCardData } from "../sportFolder/sportCardData";
import { sportSectionData } from "../sportFolder/sportSectionData";
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

  function renderSportSection() {
    // Conditionally rendering the sport section based on whether the currentSection is equal to one of the properties of the sportSectionData object.
    const currentSportSection = sportSectionData[currentSection];
    return (
      <div className="sport">
        {currentSportSection ? (
          <SportSection
            sport={currentSportSection.sport}
            image={currentSportSection.image}
          />
        ) : (
          <div>No data available for this section</div>
        )}
      </div>
    );
  }
  return <div className="sportPage">{renderContent()}</div>;
}

export default SportPage;
