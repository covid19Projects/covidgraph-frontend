import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "grommet";

import NetworkGraph from "../../components/NetworkGraph";

import {
  createClusterCommand,
  runCypherQuery,
  createPersonWithExistingCluster,
  createPersonRelatedToAnotherPerson
} from "../../db";

const graph = {
  nodes: [
    { id: "1", label: "Node 1", title: "node 1 tootip text" },
    { id: "2", label: "Node 2", title: "node 2 tootip text" },
    { id: "3", label: "Node 3", title: "node 3 tootip text" },
    { id: "4", label: "Node 4", title: "node 4 tootip text" },
    { id: "5", label: "Node 5", title: "node 5 tootip text" }
  ],
  edges: [
    { from: "1", to: "2" },
    { from: "1", to: "3" },
    { from: "2", to: "4" },
    { from: "2", to: "5" }
  ]
};

const options = {
  edges: {
    color: "#000000",
    arrows: {
      to: {
        enabled: false
      }
    },
    dashes: true
  },
  height: "500px",
  nodes: {
    shape: "circle"
  }
};
export default () => {
  const [data, setData] = useState(graph);

  const addNode = () => {
    const newNodeId = uuidv4();
    const oldData = { ...data };
    const randomNode = Math.floor(Math.random() * oldData.nodes.length);
    const newData = {
      nodes: [
        ...oldData.nodes,
        {
          id: newNodeId,
          label: "New Node",
          title: "Simple new node"
        }
      ],
      edges: [
        ...oldData.edges,
        {
          from: newNodeId,
          to: oldData.nodes[randomNode].id
        }
      ]
    };

    setData(newData);
  };

  const onCreateCluster = async () =>
    runCypherQuery(createClusterCommand("Delhi"));

  const onCreatePersonWithExistingCluster = () =>
    createPersonWithExistingCluster("Delhi", {
      name: "P1",
      age: 20,
      status: "Positive",
      location: "Hospitalized",
      notes: "Returned from italy"
    });

  const onCreatePersonRelatedToAnotherPerson = () =>
    createPersonRelatedToAnotherPerson(
      { name: "P1" },
      {
        name: "P2",
        age: 20,
        status: "Positive",
        location: "Hospitalized",
        notes: "Returned from italy"
      }
    );

  return (
    <div className="homepage">
      <h1>Home</h1>
      <button onClick={addNode}>Add node</button>
      <Button onClick={onCreateCluster}>Create Cluster</Button>
      <Button onClick={onCreatePersonWithExistingCluster}>Create person</Button>
      <Button onClick={onCreatePersonRelatedToAnotherPerson}>
        Create p2 related to p1
      </Button>
      <NetworkGraph data={data} options={options} />
    </div>
  );
};
