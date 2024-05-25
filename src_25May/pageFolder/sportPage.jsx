import React, { useState } from "react";
import SportCard from "../sportFolder/sportCard.jsx";
import Sport from "../sportFolder/sport.jsx";
import "./pageStyle.css";

function SportPage() {
  const [currentSection, setCurrentSection] = useState("landingSection");

  // Updating the state variable based on user interaction.
  function updatingSection(newSportSection) {
    setCurrentSection(newSportSection);
  }

  function getSportDetails(section) {
    switch (section) {
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

  function renderLandingSection() {
    return (
      <div className="landing">
        <SportCard
          isApplicable={true}
          isAvailable={true}
          sport={"Football"}
          image="src/imageFolder/football.jpg"
        />
        <button onClick={() => updatingSection("footballSection")}>
          Explore Football
        </button>
        <SportCard
          isApplicable={true}
          isAvailable={true}
          sport={"Handball"}
          image="src/imageFolder/handball.jpeg"
        />
        <button onClick={() => updatingSection("handballSection")}>
          Explore Handball
        </button>
        <SportCard
          isApplicable={true}
          isAvailable={false}
          sport={"Basketball"}
          image="src/imageFolder/basketball.jpeg"
        />
        <button onClick={() => updatingSection("basketballSection")}>
          Explore Basketball
        </button>
        <SportCard
          isApplicable={false}
          isAvailable={true}
          sport={"Rugby"}
          image="src/imageFolder/rugby.jpeg"
        />
        <button onClick={() => updatingSection("rugbySection")}>
          Explore Rugby
        </button>
      </div>
    );
  }

  function renderSportSection() {
    return (
      <div className="sport">
        <Sport sport={sportSection} image={sportImage} />
      </div>
    );
  }

  function renderContent() {
    if (currentSection === "landingSection") {
      return renderLandingSection();
    } else {
      return renderSportSection();
    }
  }

  return <div className="sportPage">{renderContent()}</div>;
}

export default SportPage;
