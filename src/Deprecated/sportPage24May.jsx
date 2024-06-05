import React, { useState } from "react";
import SportCard from "../sportFolder/sportCard.jsx";
import Sport from "../sportFolder/sport.jsx";
import "./pageStyle.css";

function SportPage() {
  const [currentSection, setCurrentSection] = useState("landingSection");

  const sections = {
    footballSection: {
      sport: "football",
      image: "src/imageFolder/football.jpg",
    },
    handballSection: {
      sport: "handball",
      image: "src/imageFolder/handball.jpeg",
    },
    basketballSection: {
      sport: "basketball",
      image: "src/imageFolder/basketball.jpeg",
    },
    rugbySection: {
      sport: "rugby",
      image: "src/imageFolder/rugby.jpeg",
    },
  };

  const updatingSection = (newSportSection) => {
    setCurrentSection(newSportSection);
  };

  const currentSport = sections[currentSection] || {};

  return (
    <div className="sportPage">
      {currentSection === "landingSection" && (
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
      )}

      {currentSection !== "landingSection" && currentSport.sport && (
        <div className="sport">
          <Sport sport={currentSport.sport} image={currentSport.image} />
        </div>
      )}
    </div>
  );
}

export default SportPage;
