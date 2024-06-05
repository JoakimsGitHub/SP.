import React, { useState } from "react";
import SportCard from "../sportFolder/sportCard.jsx";
import Sport from "../sportFolder/sport.jsx";
import "./pageStyle.css";

function SportPage() {
  const [currentSection, setCurrentSection] = useState("landingSection");

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

  const { sportSection, sportImage } = getSportDetails(currentSection);

  return (
    <div className="sportPage">
      {currentSection === "landingSection" ? (
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
      ) : (
        <div className="sport">
          <Sport sport={sportSection} image={sportImage} />
        </div>
      )}
    </div>
  );
}

export default SportPage;
