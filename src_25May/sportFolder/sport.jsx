import React, { useState } from "react";
import Club from "./club.jsx";
import Score from "./score.jsx";
import "./sportStyle.css";

function Sport(props) {
  const { sport, image } = props;
  const [currentSection, setSection] = useState(1);

  const tabArray = ["Clubs", "Score"];

  // Updating the currentSection state when clicking on a tab.
  function updateSection(tabIndex) {
    setSection(tabIndex);
  }

  function renderTabs() {
    return tabArray.map((tab, index) => {
      return (
        <div key={index} className="tabs">
          <button
            className={currentSection === index ? "activeTab" : "inactiveTab"}
            onClick={() => updateSection(index)}
          >
            {tab}
          </button>
        </div>
      );
    });
  }

  return (
    <div className="sport">
      {renderTabs()}
      <div className="sport">
        <div>
          <h2>{sport}</h2>
          {/* <img className="sportImageClass" src={image} alt="Sport" /> */}
        </div>
      </div>
      <div className="section">
        {currentSection === 0 && <Club sport={sport} />}
        {currentSection === 1 && <Score sport={sport} />}
      </div>
    </div>
  );
}

export default Sport;
