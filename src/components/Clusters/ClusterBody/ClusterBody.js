import React from "react";
import CasesContainer from "../../CasesContainer/CasesContainer";
import Graph from "react-graph-vis";
import "./ClusterBody.scss";
import positiveImage from "../../../assets/Positive.svg";
import negativeImage from "../../../assets/Negative.svg";
import deadImage from "../../../assets/Dead.svg";
import trackedImage from "../../../assets/Tracked.svg";
import unTrackedImage from "../../../assets/Untracked.svg";
import testedImage from "../../../assets/Tested.svg";

const ClusterBody = props => {
  const { cluster, toggleSuspectForm } = props;

  const hasData = cluster.cases.length;
  const graph = {
    nodes: cluster.cases,
    edges: cluster.relations
  };

  const setUrl = img => `http://localhost:3000${img}`;

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
    },
    groups: {
      Positive: {
        shape: "image",
        image: setUrl(positiveImage)
      },
      Negative: {
        shape: "image",
        image: setUrl(negativeImage)
      },
      Tested: {
        shape: "image",
        image: setUrl(testedImage)
      },
      Tracked: {
        shape: "image",
        image: setUrl(trackedImage)
      },
      Untracked: {
        shape: "image",
        image: setUrl(trackedImage)
      },
      Cured: {
        shape: "image",
        image: setUrl(negativeImage)
      },
      Dead: {
        shape: "image",
        image: setUrl(deadImage)
      }
    }
  };

  console.log(positiveImage);

  return hasData ? (
    <div className="cluster-body-container">
      <div className="cases-info-container">
        <CasesContainer
          toggleSuspectForm={toggleSuspectForm}
          cases={cluster.cases.filter(n => n.id !== cluster.name)}
          clusterName={cluster.name}
        />
      </div>
      <div className="network-graph-container">
        <Graph graph={graph} options={options} />;
      </div>
    </div>
  ) : null;
};

export default ClusterBody;
