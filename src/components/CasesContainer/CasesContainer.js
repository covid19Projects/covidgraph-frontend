import React from "react";
import "./ClusterContainer.scss";
import logo from "../../assets/plus.svg";

const CasesContainer = props => {
  const { cases } = props;

  return (
    <div className="cases-container">
      <label className="cases-label">CASES</label>
      <div>
        <img src={logo} alt="" />
        <span className="cases-count-container">
          {cases && cases.length} Cases
        </span>
      </div>
    </div>
  );
};

export default CasesContainer;
