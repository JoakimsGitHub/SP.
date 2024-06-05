import React, { useContext, useState } from "react";
import { ClientContext } from "../context/genericContext";
import { tabContent, tabImages } from "./memberData";
import "./memberStyle.css";

function Member() {
  const { clientDetails } = useContext(ClientContext);

  // Set initial state for tabs and contents
  const [currentTabIndex, setTabIndex] = useState(0);
  const [currentContentIndex, setContentIndex] = useState(0);
  const [isCheckBoxMarked, setCheckBoxMarked] = useState(false);

  const allTabs = [0, 1, 2];

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
  function nextContent() {
    const nextTabContentIndex =
      currentContentIndex === tabContent[currentTabIndex].length - 1
        ? 0
        : currentContentIndex + 1;
    setContentIndex(nextTabContentIndex);
  }

  // Cycling through the tabs by incrementing the previous index. If the index is greater than the amount of tabs, it will reset/loop back to 0.
  // Dividend: the current index, divisor: the total amount of tab indices, quotient: the resulting integer of the division, remainder: the integer leftover after the modulo operation.
  // const nextContent = () => {
  //   setContentIndex(
  //     (currentContentIndex + 1) % tabContent[currentTabIndex].length,
  //   );
  // };

  // Clicking a tab resets the content index.
  function handleTabClick(tabNumber) {
    setTabIndex(tabNumber);
    setContentIndex(0);
  }

  function handleCheckboxChange(event) {
    setCheckBoxMarked(event.target.checked);
  }

  function renderTabs() {
    return allTabs.map((tabNumber) => (
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
        <div className="tabs">{renderTabs()}</div>
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
