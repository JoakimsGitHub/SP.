import React, { useState } from "react";
import "./homeStyle.css";

function Home() {
  const [showMore, setShowMore] = useState(false);

  const sportsImage = "src/imageFolder/sports.jpeg";

  const homeText = `European Championship four-four-two center-half brace. Center-half
    Cup of Nations red card chip goalie UEFA European Championship
    ball one-two upper 90`;

  const additionalHomeText = `Pitch defender yellow card forward. Red card
    goalie one-two hat trick three-five-two halftime number 10
    center-half!`;

  // Clicking the button reverses the vaule of the state.
  function toggleReadMore() {
    setShowMore((prevShowMore) => !prevShowMore);
  }

  return (
    <div className="home">
      <h1>Join the team!</h1>
      <img src={sportsImage} alt="sport image" />
      <h2>Company</h2>
      <p>{homeText}</p>
      {showMore && <p>{additionalHomeText}</p>}
      <button onClick={toggleReadMore}>
        {showMore ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default Home;
