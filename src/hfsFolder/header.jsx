import React, { useState } from "react";
import { Link } from "react-router-dom";
import { tabsAndPages } from "./hfsData.jsx";
import "./hfsStyle.css";

// The strip that spans consistently across the top of each page (rendered component). Contains logo and navigation bar.
function Header() {
  const [currentTab, setTab] = useState(0);

  function clickButton(tabIndex) {
    setTab(tabIndex);
  }

  // Mapping over the array's elements and indices (objects).
  // Each tab is rendered as a link to the corresponding page.
  function renderTabs() {
    return tabsAndPages.map((tab, tabIndex) => (
      // The website's main navigation element is the link component that updates the URL slug on click, rendering the matching page component.
      <Link to={tab.page} key={tabIndex}>
        <button
          className={currentTab === tabIndex ? "active-tab" : "inactive-tab"}
          onClick={() => clickButton(tabIndex)}
        >
          {tab.title}
        </button>
      </Link>
    ));
  }

  return (
    <header>
      <div className="header-top">{/* <h1>Website</h1> */}</div>
      <nav>{renderTabs()}</nav>
      <hr />
    </header>
  );
}

export default Header;
