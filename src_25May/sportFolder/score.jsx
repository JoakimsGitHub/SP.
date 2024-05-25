import React from "react";
import "./sportStyle.css";

function Score(props) {
  const { sport } = props;
  let divClass;
  let sectionClass;
  let image;
  let imageAlt;
  let heading;
  let buttonText;

  switch (sport) {
    case "football":
      divClass = "card";
      sectionClass = "sport";
      image = "src/imageFolder/football.jpg";
      imageAlt = "Image of a football";
      heading = "Football Result";
      buttonText = "Football Button";
      break;
    case "handball":
      divClass = "card";
      sectionClass = "sport";
      image = "src/imageFolder/handball.jpeg";
      imageAlt = "Image of a handball";
      heading = "Handball Result";
      buttonText = "Handball Button";
      break;
    case "basketball":
      divClass = "card";
      sectionClass = "sport";
      image = "src/imageFolder/basketball.jpeg";
      imageAlt = "Image of a basketball";
      heading = "Basketball Result";
      buttonText = "Basketball Button";
      break;
    case "rugby":
      divClass = "card";
      sectionClass = "sport";
      image = "src/imageFolder/field.jpg";
      imageAlt = "Image of a rugby";
      heading = "Rugby Result";
      buttonText = "Rugby Button";
      break;
    default:
      return null;
  }
  return (
    <div className={divClass}>
      <section className={sectionClass}>
        <img src={image} alt={imageAlt} />
        <h2>{heading}</h2>
        <button>{buttonText}</button>
      </section>
    </div>
  );
}

export default Score;
