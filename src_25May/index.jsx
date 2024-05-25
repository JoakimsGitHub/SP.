import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Storing the HTML element that has the ID "root".
const rootElement = document.getElementById("root");
// Creating a root instance and rendering the React application into the virtual DOM at the position of that element as the entry point for the app.
// Choosing createRoot(document.getElementById("root")) over ReactDOM.render(<App/> and document.getElementById("root") ).
createRoot(rootElement).render(
  // Strict mode is a component that holds the rendered component. For catching potential issues and throws a warning, not an error.
  // The rendered output.
  <StrictMode>
    <App />
  </StrictMode>,
);
