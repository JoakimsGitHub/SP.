import React, { useState } from "react";
import { Link } from "react-router-dom";
import { tabsAndPages } from "./hfsData.jsx";
import "./hfsStyle.css";

// The strip that spans consistently across the top of each page (rendered component). Contains logo and navigation bar.
// Adjacent to the main content area.
// Contains peripheral info that is contextual to the main content.
function Sidebar() {
  const text =
    "Steer clear of the goalie of Nations UEFA halftime soccer number 10 midfielder one-two. Pitch World Cup referee center-half one-two midfielder yellow card chip four-four-two. Steer clear of the goalie of Nations UEFA halftime soccer number 10 midfielder one-two. Pitch World Cup referee center-half one-two midfielder yellow card chip four-four-two.";
  return (
    <>
      <p>{text}</p>
    </>
  );
}

export default Sidebar;
