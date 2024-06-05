// JavaScript Extensible Markup Language.
// A JavaScript library for building UI using component composition.
// Functional component: a function that takes props and returns HTML.
// React Hooks are features that allow functional components to use class features.

// Using React library with ReactDOM for web dev.
// Doesn't enforce strict rules around code conventions or file organization.
// For building the entire app.
// Using JSX syntax that extends JS for outputting HTML.

// Single-page application: building the multi-page website using a single HTML file. Instead of pages (HTML files), different components are rendered.
// Using the React Router routing library. Each route corresponds to a different URL. Each URL is mapped to a component.
// react-router-dom: a package within the React Router ecosystem designed for web application using React. It provides components and hooks for building client-side routing.
// BrowserRouter: a component wraps the app and provides the functionality for client-side routing. It listens for changes to the URL and renders the component based on it.
// Route: a component that renders a specific component based on the URL.
// Switch: a component that groups route components and renders the first one that matches the current URL.
// Link: a component that declares created links by rendering an anchor tag, updating the URL when clicked and triggers the route change.

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./globalStyle.css";

import Header from "./headerFooterFolder/header";
import Footer from "./headerFooterFolder/footer";
import SportPage from "./pageFolder/sportPage";
import JoinPage from "./pageFolder/joinPage";
import AboutPage from "./pageFolder/aboutPage";
import NoPage from "./pageFolder/noPage";

function App() {
  // Check if the URL has a slug.
  const isSlugAvailable = window.location.pathname !== "/";
  return (
    <>
      <BrowserRouter>
        {/* Conditionally rendering the components based on the current URL. */}
        {isSlugAvailable ? (
          <>
            {/* If there's a slug then render the header, page and footer. */}
            <Header />
            <Routes>
              <Route path="/sport" element={<SportPage />} />
              <Route path="/join" element={<JoinPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Footer />
          </>
        ) : (
          <Routes>
            {/* If no slug is present then only show NoPage. */}
            <Route path="*" element={<NoPage />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
