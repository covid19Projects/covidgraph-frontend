import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Home from "./pages/Home.jsx";
import Clusters from "./components/Clusters/Clusters";

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
        <div className="app-container">
          <Home />
          <Clusters />
        </div>
    </>
  );
}

export default App;
