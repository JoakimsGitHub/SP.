import React, { useState } from "react";
import { homeData } from "./homeData";
import "./homeStyle.css";

function Home() {
  const [showMore, setShowMore] = useState(false);

  const sportsImage = "src/imageFolder/sports.jpeg";

  // Clicking the button reverses the vaule of the state.
  function toggleReadMore() {
    setShowMore((prevShowMore) => !prevShowMore);
  }

  return (
    <div className="home">
      <h1>Join the team!</h1>
      <img src={sportsImage} alt="sport image" />
      <h2>Company</h2>
      <p>{homeData.homeText}</p>
      {showMore && (
        <p className="additionalText">{homeData.additionalHomeText}</p>
      )}
      <button onClick={toggleReadMore}>
        {showMore ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default Home;
