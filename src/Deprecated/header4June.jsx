import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./headerFooterStyle.css";

const tabData = [
  {
    title: "Member page",
    url: "/member",
  },
  {
    title: "Sports",
    url: "/sport",
  },
  {
    title: "Join us",
    url: "/join",
  },
  {
    title: "About us",
    url: "/about",
  },
];

function Header() {
  const [currentTab, setTab] = useState("Member page");

  function clickButton(tabTitle) {
    setTab(tabTitle);
  }

  // Mapping over the tabData array to render each tab.
  function renderTabs() {
    return tabData.map((tabElement, index) => (
      <Link to={tabElement.url} key={index}>
        <button
          className={currentTab === tabElement.title ? "activeTab" : "inactiveTab"}
          onClick={() => clickButton(tabElement.title)}
        >
          {tabElement.title}
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
