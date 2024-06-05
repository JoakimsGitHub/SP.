// Parent component file:

// The component is a self-contained, reusable code module for building the UI.
// Abstracts away much of the rendering work.
// Consist of the import staements, component function and export statements.

// Import statements import code from external files.
// Imported libraries without path or extension means they're not local files but dependencies in the package.json file.
import React from "react";
// Local files write a path or extension.
// import CardFootball from "./cardFootball";
// import CardHandball from "./cardHandball";
// import CardBasketball from "./cardBasketball";
import Sport from "../sportFolder/sport.jsx";

// The component function.
// The React component naming convention is to start with a capital letter (Pascalcase or Upper CamelCase).

function SportPage() {
  // The function returns a JSX expression that the browser renders to the DOM.
  return (
    // Fragment: the component function can only return one JSX element so each element is encapsulated inside one. An empty set of angle brackets is used as a wrapper,
    <>
      {/* Conditional rendering: controlling what the component renders based on passed props (object) contain key-value pairs. */}
      {/* The components' values are interpreted as JS expressions inside JSX. */}
      {/*This way, each child component receives its own set of props from the parent component, allowing you to customize their content dynamically.*/}
      {/* Class names cannot be assigned using props.*/}
      {/* Only using attributes when necessary to style and embedd JS expressions as key-value pairs. */}
      <Sport
        isApplicable={true}
        isAvailable={true}
        sport={"Football"}
        photo="src/imageFolder/football.jpg"
      />
      <Sport
        isApplicable={true}
        isAvailable={true}
        sport={"Handball"}
        photo="src/imageFolder/handball.jpeg"
      />
      <Sport
        isApplicable={true}
        isAvailable={false}
        sport={"Basketball"}
        photo="src/imageFolder/basketball.jpeg"
      />
      <Sport
        isApplicable={false}
        isAvailable={true}
        sport={"Rugby"}
        photo="src/imageFolder/basketball.jpeg"
      />
    </>
  );
}

export default SportPage;
