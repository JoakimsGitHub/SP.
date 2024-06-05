import React from "react";

// Side-effect import: no variable name nor from-directive. Though no value is imported, it tells Vite to add the referenced CSS file to the final code ouput.
import "./cardStyle.css";

// The props is an object consisting of key-value pairs that hold attribute values. These are passed unidirectionally as read-only data to the child component.

// Importing the Link component to update the URL.
import { Link } from "react-router-dom";

function CardBasketball(props) {
  // Destructuring the props values into variables.
  const { isApplicable, isAvailable, sport } = props;

  // Declaring local variables that have their values based on the prop's property values.
  // Choosing new names so that they're not redeclared.
  // Not reassigning the props values because they are being read-only and must remain immutable within the component.
  const applicableID = isApplicable ? "applicable" : "unapplicable";
  const availableID = isAvailable ? "available" : "unavailable";
  const applicableText = sport + " is not applicable. ";
  const availableText = isAvailable ? "Make your bet now!" : "Coming soon.";
  const sportText = isApplicable ? availableText : applicableText;
  const image = isApplicable
    ? "src/imageFolder/basketball.jpeg"
    : "src/imageFolder/stop.jpg";
  const alt = isApplicable ? `Image of ${sport}.` : "Image of a stop sign.";
  const buttonText = "Click Here";

  // Functions called by the event bound to the element by the event listener as attributes.
  // The event object (onClick, onMouseOver, mouseOut) passed as parameter. It holds properties such as targeted element (button).
  function clickButton(event) {
    if (event.target) {
      event.target.style.color = "hsl(97, 20%, 85%)";
    }
  }
  function mouseOver(event) {
    if (event.target) {
      event.target.style.backgroundColor = "hsl(97, 20%, 85%)";
    }
  }
  function mouseOut(event) {
    if (event.target) {
      event.target.style.backgroundColor = "hsl(97, 20%, 65%)";
    }
  }

  return (
    <>
      {/* Content division element as an invisible box for grouping. Group elements and create structural divisions in a web page. */}
      <div className="card">
        <div id={applicableID}>
          <div id={availableID}>
            <img src={image} alt={alt} />
            <h2>{sport}</h2>
            <p>{sportText}</p>
            {/* Setting event listener attributes. */}
            <Link to="/join">
              <button
                onClick={clickButton}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardBasketball;
