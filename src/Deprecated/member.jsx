import React, { useContext, useState } from "react";
import { ClientContext } from "../context/genericContext";
import "./memberStyle.css";

function Member() {
  const { clientDetails } = useContext(ClientContext);

  // Set initial state for tabs and contents in a single useState hook
  const [state, setState] = useState({
    currentTabIndex: 1,
    currentContentIndex: 0,
  });

  // The object contains image paths for each tab index.
  const tabImages = {
    1: [
      "src/memberFolder/memberImages/footballNews1.jpg",
      "src/memberFolder/memberImages/rugbyBall.jpg",
      "src/memberFolder/memberImages/rugbyField.jpg",
    ],
    2: [
      "src/memberFolder/memberImages/sportsMixed.jpg",
      "src/memberFolder/memberImages/sportsMixed2.jpg",
      "src/memberFolder/memberImages/sportsMixed4.jpg",
    ],
    3: [
      "src/memberFolder/memberImages/sportsMixed5.png",
      "src/memberFolder/memberImages/sportsTrophy.jpg",
      "src/memberFolder/memberImages/raceTrack.jpg",
    ],
  };

  // Define initial content states
  const tabContent = {
    1: [
      "Forward one-two halftime number. Ball goal referee upper 90 goalie red card halftime. Red card midfielder UEFA European Championship center-half. ",
      "10 goalie pitch goal defender brace pitch World Cup forward number 10 defender goal yellow card halftime referee soccer. Three-five-two halftime chip referee. ",
      "Whole nine yards. World Cup hat trick number 10 one-two defender forward four-four-two soccer goalie yellow card.",
    ],
    2: [
      "Upper 90 soccer goal yellow. Cup referee center-half one-two midfielder yellow card chip four-four-two number 10 soccer ball. ",
      "Card defender Cup of Nations. Cup of Nations goal halftime. Goal goalie pitch forward number upper 90 yellow card midfielder African Cup of Nations. Goal one-two African Cup. ",
      "Steer clear of the goalie of Nations UEFA halftime soccer number 10 midfielder one-two. Pitch World Cup referee center-half one-two midfielder yellow card chip four-four-two. ",
    ],
    3: [
      "Cup of Nations UEFA European. Pitch four-four-two goalie one-two halftime goal soccer striker ball defender upper 90 chip UEFA European. ",
      "Championship goal forward. Championship African Cup of Nations. Four-four-two African Cup of Nations brace center-half upper 90 goalie. ",
      "Say hello and welcome back. Forward striker midfielder three-five-two red card number 10 chip halftime goal referee. World Cup midfielder yellow card striker brace ball pitch goal goalie four-four-two. ",
    ],
  };

  const tabTitle = {
    1: "News",
    2: "Results",
    3: "Upcoming events",
  };

  const tabHeading = {
    1: "This is what's up",
    2: "This went down",
    3: "This comes up",
  };

  // Function to handle the Next button click
  // Count how many items are in the list of the current tab's content, and then subtract 1 to get the actual count.
  // If the previous content index equals the last element of the current content array then set the next content index to 0.
  function nextContent() {
    setState((prevState) => {
      const nextContentIndex =
        prevState.currentContentIndex ===
        tabContent[prevState.currentTabIndex].length - 1
          ? 0
          : prevState.currentContentIndex + 1;
      return { ...prevState, currentContentIndex: nextContentIndex };
    });
  }

  // Function to handle tab click
  function handleTabClick(tabNumber) {
    setState({ currentTabIndex: tabNumber, currentContentIndex: 0 });
  }

  return (
    <>
      <div className="memberPage">
        <h1>Member Page</h1>
        {/* Display the firstname from the context */}
        <h2>Welcome, {clientDetails.firstname}</h2>
        <div className="memberContainer">
          <div className="tabs">
            {/* Mapping over the array elements, creating one div element each. */}
            {[1, 2, 3].map((tabNumber) => (
              <div
                key={tabNumber}
                className={
                  state.currentTabIndex === tabNumber
                    ? "activeTab"
                    : "inactiveTab"
                }
                onClick={() => handleTabClick(tabNumber)}
              >
                {tabTitle[tabNumber]}
              </div>
            ))}
          </div>
          <div className="tabContent">
            <h2>{tabHeading[state.currentTabIndex]}</h2>
            <hr />
            <p>
              {tabContent[state.currentTabIndex][state.currentContentIndex]}
            </p>{" "}
            {/* Displaying the current content */}
            <img
              className="contentImage"
              src={tabImages[state.currentTabIndex][state.currentContentIndex]}
              alt="Tab content"
            />
            <checkbox 
            <button className="nextButton" onClick={nextContent}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Member;
