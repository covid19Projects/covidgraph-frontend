import React from "react";
import Graph from "react-graph-vis";

function NetworkGraph({ data, options }) {
  return <Graph graph={data} options={options} />;
}

export default NetworkGraph;
