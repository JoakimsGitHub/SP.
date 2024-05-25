import React, { useContext, useState } from "react";
import { ClientContext } from "../context/genericContext";
import "./memberStyle.css";

function Member() {
  const { clientDetails } = useContext(ClientContext);

  // Set initial state for tabs and contents
  const [currentTabIndex, setTabIndex] = useState(0);
  const [currentContentIndex, setContentIndex] = useState(0);
  const [isCheckBoxMarked, setCheckBoxMarked] = useState(false);

  // The object contains image paths for each tab index.
  const tabImages = {
    0: [
      "src/memberFolder/memberImages/footballNews1.jpg",
      "src/memberFolder/memberImages/rugbyBall.jpg",
      "src/memberFolder/memberImages/rugbyField.jpg",
    ],
    1: [
      "src/memberFolder/memberImages/sportsMixed.jpg",
      "src/memberFolder/memberImages/sportsMixed2.jpg",
      "src/memberFolder/memberImages/sportsMixed4.jpg",
    ],
    2: [
      "src/memberFolder/memberImages/sportsMixed5.png",
      "src/memberFolder/memberImages/sportsTrophy.jpg",
      "src/memberFolder/memberImages/raceTrack.jpg",
    ],
  };

  // Define initial content states
  const tabContent = {
    0: [
      "Forward one-two halftime number. Ball goal referee upper 90 goalie red card halftime. Red card midfielder UEFA European Championship center-half. ",
      "10 goalie pitch goal defender brace pitch World Cup forward number 10 defender goal yellow card halftime referee soccer. Three-five-two halftime chip referee. ",
      "Whole nine yards. World Cup hat trick number 10 one-two defender forward four-four-two soccer goalie yellow card.",
    ],
    1: [
      "Upper 90 soccer goal yellow. Cup referee center-half one-two midfielder yellow card chip four-four-two number 10 soccer ball. ",
      "Card defender Cup of Nations. Cup of Nations goal halftime. Goal goalie pitch forward number upper 90 yellow card midfielder African Cup of Nations. Goal one-two African Cup. ",
      "Steer clear of the goalie of Nations UEFA halftime soccer number 10 midfielder one-two. Pitch World Cup referee center-half one-two midfielder yellow card chip four-four-two. ",
    ],
    2: [
      "Cup of Nations UEFA European. Pitch four-four-two goalie one-two halftime goal soccer striker ball defender upper 90 chip UEFA European. ",
      "Championship goal forward. Championship African Cup of Nations. Four-four-two African Cup of Nations brace center-half upper 90 goalie. ",
      "Say hello and welcome back. Forward striker midfielder three-five-two red card number 10 chip halftime goal referee. World Cup midfielder yellow card striker brace ball pitch goal goalie four-four-two. ",
    ],
  };

  const tabTitle = {
    0: "News",
    1: "Results",
    2: "Upcoming events",
  };

  const tabHeading = {
    0: "This is what's up",
    1: "This went down",
    2: "This is coming next",
  };

  // Cycling through the tab index.
  // If the current content index equals the last content, then set it to 0.
  function nextContent() {
    const nextTabContentIndex =
      currentContentIndex === tabContent[currentTabIndex].length - 1
        ? 0
        : currentContentIndex + 1;
    setContentIndex(nextTabContentIndex);
  }

  // Clicking a tab resets the content index.
  function handleTabClick(tabNumber) {
    setTabIndex(tabNumber);
    setContentIndex(0); 
  }

  function handleCheckboxChange(event) {
    setCheckBoxMarked(event.target.checked);
  }

  function renderTabs() {
    return [0, 1, 2].map((tabNumber) => (
      <div
        key={tabNumber}
        className={currentTabIndex === tabNumber ? "activeTab" : "inactiveTab"}
        onClick={() => handleTabClick(tabNumber)}
      >
        {tabTitle[tabNumber]}
      </div>
    ));
  }

  function renderCheckbox() {
    if (currentTabIndex === 2) {
      return (
        <div className="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            checked={isCheckBoxMarked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="checkbox">Notify me: </label>
        </div>
      );
    }
    return null;
  }

  return (
    <div className="memberPage">
      <h1>Member Page</h1>
      <h2>Welcome, {clientDetails.firstname}</h2>
      <div className="memberContainer">
        <div className="tabs">
          {renderTabs()}
        </div>
        <div className="tabContent">
          <h2>{tabHeading[currentTabIndex]}</h2>
          <hr />
          <p>{tabContent[currentTabIndex][currentContentIndex]}</p>
          <img
            className="contentImage"
            src={tabImages[currentTabIndex][currentContentIndex]}
            alt="Tab content"
          />
          {renderCheckbox()}
          <button className="nextButton" onClick={nextContent}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Member;
