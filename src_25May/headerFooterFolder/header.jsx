import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./headerFooterStyle.css";

function Header() {
  const [currentTab, setTab] = useState(0);

  function clickButton(tab) {
    setTab(tab);
  }

  const tabTitle = {
    0: "Member page",
    1: "Sports",
    2: "Join us",
    3: "About us",
  };

  const pageName = {
    0: "/member",
    1: "/sport",
    2: "/join",
    3: "/about",
  };

  // Mapping over each integer which is used as element index as text content for each rendered tab.
  function renderTabs() {
    return [0, 1, 2, 3].map((tab) => (
      <Link to={pageName[tab]} key={tab}>
        <button
          className={currentTab === tab ? "activeTab" : "inactiveTab"}
          onClick={() => clickButton(tab)}
        >
          {tabTitle[tab]}
        </button>
      </Link>
    ));
  }

  return (
    <header>
      <nav>
        <Link to="/home">
          <h1>Website</h1>
        </Link>
        {renderTabs()}
      </nav>
      <hr />
    </header>
  );
}

export default Header;
