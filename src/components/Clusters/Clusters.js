import React, { useState, useEffect } from "react";
import { Accordion } from "react-accessible-accordion";
import ClusterAccordionItem from "./ClusterAccordionItem/ClusterAccordionItem";
import Graph from "react-graph-vis";
import {
  createClusterCommand,
  runCypherQuery,
  createPersonWithExistingCluster,
  createPersonRelatedToAnotherPerson,
  createPersonAlongWithNewCluster,
  editAPerson,
  deleteAPerson,
  getClusterData,
  getAllClustersData
} from "./../../db";
import ClusterHead from "./ClusterHead/ClusterHead";
import SuspectForm from "../SuspectForm/SuspectForm";

import { mapResultToGraph } from "./../../mappers";
import CasesListContainer from "../CasesListContainer/CasesListContainer";

const Clusters = props => {
  const [clusters, setClusters] = useState([]);
  const [isSuspectFormOpen, setIsSuspectFormOpen] = useState(false);
  const [editSuspectFormData, setEditSuspectFormData] = useState(false);
  const toggleSuspectForm = caseToEdit => {
    if (caseToEdit) {
      setEditSuspectFormData(caseToEdit);
    }
    setIsSuspectFormOpen(!isSuspectFormOpen);
  };
  // const onCreateCluster = async () =>
  //   runCypherQuery(createClusterCommand("Delhi"));

  // const onCreatePersonWithExistingCluster = () =>
  //   createPersonWithExistingCluster("Delhi", {
  //     name: "P1",
  //     age: 20,
  //     status: "Positive",
  //     location: "Hospitalized",
  //     notes: "Returned from italy"
  //   });

  // const onCreatePersonRelatedToAnotherPerson = () =>
  //   createPersonRelatedToAnotherPerson(
  //     { name: "P1" },
  //     {
  //       name: "P2",
  //       age: 20,
  //       status: "Positive",
  //       location: "Hospitalized",
  //       notes: "Returned from italy"
  //     }
  //   );

  // const onCreatePersonAlongWithNewCluster = () =>
  //   createPersonAlongWithNewCluster(
  //     {
  //       name: "P3",
  //       age: 24,
  //       status: "Positive",
  //       location: "Hospitalized",
  //       notes: "Returned from USA"
  //     },
  //     { name: "Andhra Pradesh" }
  //   );

  // const onEditAPerson = () =>
  //   editAPerson({
  //     name: "P1",
  //     age: 15,
  //     notes: "Young suspect"
  //   });

  // const onDeleteAPerson = () =>
  //   deleteAPerson({
  //     name: "P2"
  //   });

  useEffect(() => {
    const getData = async () => {
      let clusters = [];
      const allClustersData = await getAllClustersData();
      const { records } = allClustersData;

      records.forEach(
        ({ _fields }) => _fields && _fields.length && clusters.push(_fields[0])
      );

      clusters = clusters.map(async cluster => {
        const clusterData = await getClusterData(cluster);
        return {
          name: cluster,
          ...mapResultToGraph(clusterData)
        };
      });

      return Promise.all(clusters);
    };

    getData()
      .then(clusters => {
        setClusters(clusters);
      })
      .catch(console.error);
  }, []);

  const addPersonToCluster = (clusterName, person) => {
    const newClusters = clusters.map(cluster => {
      if (cluster.name === clusterName) {
        return {
          name: clusterName,
          cases: [
            ...cluster.cases,
            {
              ...person,
              id: person.id,
              type: "Person",
              label: person.name,
              group: person.status
            }
          ],
          relations: [
            ...cluster.relations,
            {
              from: clusterName,
              to: person.id
            }
          ]
        };
      }
      return cluster;
    });
    setClusters(newClusters);
  };

  const updatePersonInCluster = (clusterName, person) => {
    const newClusters = clusters.map(cluster => {
      if (cluster.name === clusterName) {
        const filteredCases = cluster.cases.filter(c => c.id !== person.id);

        return {
          name: clusterName,
          cases: [
            ...filteredCases,
            {
              ...person,
              id: person.id,
              type: "Person",
              label: person.name,
              group: person.status
            }
          ],
          relations: cluster.relations
        };
      }
      return cluster;
    });
    setClusters(newClusters);
  };

  return (
    <>
      <ClusterHead toggleSuspectForm={toggleSuspectForm} />
      <Accordion allowZeroExpanded={true}>
        {clusters.length
          ? clusters.map(cluster => (
              <ClusterAccordionItem
                key={cluster.name}
                cluster={cluster}
                toggleSuspectForm={toggleSuspectForm}
              />
            ))
          : null}
      </Accordion>
      {isSuspectFormOpen ? (
        <SuspectForm
          addPersonToCluster={addPersonToCluster}
          onClose={toggleSuspectForm}
          caseToEdit={editSuspectFormData}
          updatePersonInCluster={updatePersonInCluster}
          setEditSuspectFormData={setEditSuspectFormData}
        />
      ) : null}
    </>
  );
};

export default Clusters;
