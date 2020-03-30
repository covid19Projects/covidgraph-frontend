import React, { useState } from "react";
import { Link } from "@reach/router";

import "./layout.scss";

import Header from "../Header";

export default ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
};
