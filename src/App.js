import React from "react";
import { Helmet } from "react-helmet";
import { Router } from "@reach/router";
import "./App.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";

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
        <Layout>
          <Router>
            <Home path="/" />
          </Router>
        </Layout>
      </div>
    </>
  );
}

export default App;
