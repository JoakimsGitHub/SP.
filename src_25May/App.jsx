import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./globalStyle.css";

import Header from "./headerFooterFolder/header";
import Footer from "./headerFooterFolder/footer";
import HomePage from "./pageFolder/homePage";
import SportPage from "./pageFolder/sportPage";
import JoinPage from "./pageFolder/joinPage";
import AboutPage from "./pageFolder/aboutPage";
import MemberPage from "./pageFolder/memberPage";
import NoPage from "./pageFolder/noPage";
import { ContextProvider } from "./context/genericContext";

function App() {
  const isSlugAvailable = window.location.pathname !== "/";
  return (
    <ContextProvider>
      <main>
        <BrowserRouter>
          {isSlugAvailable ? (
            <>
              <Header />
              <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/sport" element={<SportPage />} />
                <Route path="/join" element={<JoinPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/member" element={<MemberPage />} />
                <Route path="*" element={<NoPage />} />
              </Routes>
              <Footer />
            </>
          ) : (
            <Routes>
              <Route path="*" element={<NoPage />} />
            </Routes>
          )}
        </BrowserRouter>
      </main>
    </ContextProvider>
  );
}

export default App;
