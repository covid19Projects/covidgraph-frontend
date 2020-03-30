import React from "react";
import CasesContainer from "../../CasesContainer/CasesContainer";
import Graph from "react-graph-vis";
import "./ClusterBody.scss";

const options = {
  edges: {
    color: "#000000",
    arrows: {
      to: {
        enabled: true
      }
    },
    dashes: true
  },
  height: "500px",
  nodes: {
    shape: "circle"
  }
};

const ClusterBody = props => {
  const { cluster } = props;
  const graph = {
    nodes: cluster.cases,
    edges: cluster.relations
  };

  return (
    <div className="cluster-body-container">
      <div className="cases-info-container">
        <CasesContainer cases={cluster.cases} />
      </div>
      <div className="network-graph-container">
        <Graph graph={graph} options={options} />;
      </div>
    </div>
  );
};

export default ClusterBody;
