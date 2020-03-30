import React, { useState, useEffect } from "react";
import { Accordion } from "react-accessible-accordion";
import ClusterAccordionItem from "./ClusterAccordionItem/ClusterAccordionItem";

import {
  createClusterCommand,
  runCypherQuery,
  createPersonWithExistingCluster,
  createPersonRelatedToAnotherPerson,
  createPersonAlongWithNewCluster,
  editAPerson,
  deleteAPerson,
  getClusterData
} from "./../../db";

import { mapResultToGraph } from "./../../mappers";
const Clusters = props => {
  const clusters = [
    {
      place: "Visakhapatnam",
      cases: [
        {
          id: "C11921",
          age: 21,
          gender: "male",
          location: "Vishakhapatnam near the temple street, potti velu",
          description:
            "This is the description This is the description This is the description This is the description"
        },
        {
          id: "C11922",
          age: 22,
          gender: "male",
          location: "Vishakhapatnam near the temple street, potti velu",
          description:
            "This is the description This is the description This is the description This is the description"
        },
        {
          id: "C11923",
          age: 23,
          gender: "male",
          location: "Vishakhapatnam near the temple street, potti velu",
          description:
            "This is the description This is the description This is the description This is the description"
        },
        {
          id: "C11924",
          age: 24,
          gender: "male",
          location: "Vishakhapatnam near the temple street, potti velu",
          description:
            "This is the description This is the description This is the description This is the description"
        },
        {
          id: "C11925",
          age: 25,
          gender: "male",
          location: "Vishakhapatnam near the temple street, potti velu",
          description:
            "This is the description This is the description This is the description This is the description"
        },
        {
          id: "C11926",
          age: 26,
          gender: "male",
          location: "Vishakhapatnam near the temple street, potti velu",
          description:
            "This is the description This is the description This is the description This is the description"
        },
        {
          id: "C11927",
          age: 27,
          gender: "male",
          location: "Vishakhapatnam near the temple street, potti velu",
          description:
            "This is the description This is the description This is the description This is the description"
        },
        {
          id: "C11928",
          age: 28,
          gender: "male",
          location: "Vishakhapatnam near the temple street, potti velu",
          description:
            "This is the description This is the description This is the description This is the description"
        },
        {
          id: "C11929",
          age: 29,
          gender: "male",
          location: "Vishakhapatnam near the temple street, potti velu",
          description:
            "This is the description This is the description This is the description This is the description"
        },
        {
          id: "C11930",
          age: 30,
          gender: "male",
          location: "Vishakhapatnam near the temple street, potti velu",
          description:
            "This is the description This is the description This is the description This is the description"
        },
        {
          id: "C11931",
          age: 31,
          gender: "male",
          location: "Vishakhapatnam near the temple street, potti velu",
          description:
            "This is the description This is the description This is the description This is the description"
        },
        {
          id: "C11932",
          name: "alpha jel",
          age: 32,
          gender: "male",
          location: "Vishakhapatnam near the temple street, potti velu",
          description:
            "This is the description This is the description This is the description This is the description"
        },
        {
          id: "C11933",
          age: 33,
          gender: "male",
          location: "Vishakhapatnam near the temple street, potti velu",
          description:
            "This is the description This is the description This is the description This is the description"
        },
        {
          id: "C11934",
          age: 34,
          gender: "male",
          location: "Vishakhapatnam near the temple street, potti velu",
          description:
            "This is the description This is the description This is the description This is the description"
        },
        {
          id: "C11935",
          age: 35,
          gender: "male",
          location: "Vishakhapatnam near the temple street, potti velu",
          description:
            "This is the description This is the description This is the description This is the description"
        },
        {
          id: "C11936",
          age: 36,
          gender: "male",
          location: "Vishakhapatnam near the temple street, potti velu",
          description:
            "This is the description This is the description This is the description This is the description"
        }
      ]
    },
    {
      place: "Hyderabad",
      cases: [
        { id: "C123", age: 23, gender: "male", location: "", description: "" }
      ]
    },
    {
      place: "Vijayawada",
      cases: [
        { id: "C123", age: 23, gender: "male", location: "", description: "" }
      ]
    },
    {
      place: "Kakinada",
      cases: [
        { id: "C123", age: 23, gender: "male", location: "", description: "" }
      ]
    }
  ];

  const [cluster, setCluster] = useState({
    cases: [],
    relations: [],
    lol: "alice"
  });

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
    getClusterData("Delhi")
      .then(rawData => {
        setCluster({
          name: "Delhi",
          ...mapResultToGraph(rawData)
        });
      })
      .catch(console.error);
  }, []);

  return (
    <Accordion allowZeroExpanded={true}>
      {cluster
        ? [cluster].map(cluster => (
            <ClusterAccordionItem key={cluster.name} cluster={cluster} />
          ))
        : null}
    </Accordion>
  );
};

export default Clusters;
