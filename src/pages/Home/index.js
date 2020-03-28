import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "grommet";

import NetworkGraph from "../../components/NetworkGraph";

import {
  createClusterCommand,
  runCypherQuery,
  createPersonWithExistingCluster,
  createPersonRelatedToAnotherPerson,
  createPersonAlongWithNewCluster,
  editAPerson,
  deleteAPerson,
  getClusterData
} from "../../db";
import { mapResultToGraph } from "../../mappers";

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
        enabled: true
      }
    },
    dashes: true
  },
  height: "500px",
  nodes: {
    shape: "circle",
    id: "name",
    label: "name"
  }
};
export default () => {
  const [data, setData] = useState({ edges: [], nodes: [] });
  const [rawData, setRawData] = useState(null);

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

  const onCreatePersonWithExistingCluster = async () => {
    await createPersonWithExistingCluster("Delhi", {
      name: "P6",
      age: 20,
      status: "Positive",
      location: "Hospitalized",
      notes: "Returned from italy"
    });
    getClusterData("Delhi")
      .then(rawData => {
        setData(mapResultToGraph(rawData));
        console.log(mapResultToGraph(rawData));
      })
      .catch(console.error);
  };

  const onCreatePersonRelatedToAnotherPerson = () =>
    createPersonRelatedToAnotherPerson(
      { name: "P4" },
      {
        name: "P5",
        age: 20,
        status: "Positive",
        location: "Hospitalized",
        notes: "Returned from italy"
      }
    );

  const onCreatePersonAlongWithNewCluster = () =>
    createPersonAlongWithNewCluster(
      {
        name: "P3",
        age: 24,
        status: "Positive",
        location: "Hospitalized",
        notes: "Returned from USA"
      },
      { name: "Andhra Pradesh" }
    );

  const onEditAPerson = () =>
    editAPerson({
      name: "P1",
      age: 15,
      notes: "Young suspect"
    });

  const onDeleteAPerson = () =>
    deleteAPerson({
      name: "P2"
    });

  useEffect(() => {
    getClusterData("Delhi")
      .then(rawData => {
        setData(mapResultToGraph(rawData));
        console.log(mapResultToGraph(rawData));
      })
      .catch(console.error);
  }, []);

  return (
    <div className="homepage">
      <h1>Home</h1>
      <button onClick={addNode}>Add node</button>
      <Button onClick={onCreateCluster}>Create Cluster</Button>
      <Button onClick={onCreatePersonWithExistingCluster}>Create person</Button>
      <Button onClick={onCreatePersonRelatedToAnotherPerson}>
        Create p2 related to p1
      </Button>
      <Button onClick={onCreatePersonAlongWithNewCluster}>
        Create person with new cluster
      </Button>
      <Button onClick={onEditAPerson}>Edit P1</Button>
      <Button onClick={onDeleteAPerson}>Delete P2</Button>
      <NetworkGraph data={data} options={options} />
    </div>
  );
};
