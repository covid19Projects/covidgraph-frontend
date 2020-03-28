import React from "react";
import { Helmet } from "react-helmet";
import { Router } from "@reach/router";
import { Grommet } from "grommet";
import "./App.css";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CovidGraph</title>
        <meta
          title="description"
          content="App to keep track of coronavirus infections"
        />
      </Helmet>

      <Grommet>
        <div className="app-container">
            <Router>
              <Home path="/" />
            </Router>
        </div>
      </Grommet>
    </>
  );
}

export default App;
