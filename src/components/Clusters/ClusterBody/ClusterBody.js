import React from "react";
import CasesContainer from "../../CasesContainer/CasesContainer";
import Graph from "react-graph-vis";
import "./ClusterBody.scss";

const ClusterBody = props => {
  const { cluster } = props;

  const hasData = cluster.cases.length;
  const graph = {
    nodes: cluster.cases,
    edges: cluster.relations
  };
  const options = {
    autoResize: true,
    edges: {
      color: "#000000",
      arrows: {
        to: {
          enabled: true
        }
      },
      dashes: true
    },
    nodes: {
      shape: "circle"
    }
  };

  return hasData ? (
    <div className="cluster-body-container">
      <div className="cases-info-container">
        <CasesContainer cases={cluster.cases} />
      </div>
      <div className="network-graph-container">
        <Graph graph={graph} options={options} />;
      </div>
    </div>
  ) : null;
};

export default ClusterBody;
