import React, { Component } from "react";
import search from "../../../assets/covid-search.svg";
import menu from "../../../assets/covid-menu.svg";
import add from "../../../assets/covid-add.svg";
import "./ClusterHead.scss";
import CreateClusterContent from "../../DropButtonBody/CreateClusterContent.jsx";
import { DropButton } from "grommet";
import { useState } from "react";

const ClusterHead = ({ toggleSuspectForm }) => {
  const [isCreateClusterPopupOpen, setIsCreateClusterPopupOpen] = useState(
    false
  );
  const toggleIsCreateClusterPopupOpen = () =>
    setIsCreateClusterPopupOpen(!isCreateClusterPopupOpen);

  return (
    <div className="cluster-header">
      <div className="description">
        <p className="title">Clusters</p>
      </div>
      <div className="controls">
        <button className="icon">
          <img className="image" src={search} />
        </button>
        <button className="icon">
          <img className="image" src={menu} />
        </button>
        <button className="icon" onClick={toggleSuspectForm}>
          <img className="image" src={add} />
        </button>
        <DropButton
          className="icon"
          label="Create Cluster"
          // open={open}
          onOpen={() => {setIsCreateClusterPopupOpen(true)}}
          onClose={toggleIsCreateClusterPopupOpen}
          dropContent={
              isCreateClusterPopupOpen && (
              <CreateClusterContent onClose={toggleIsCreateClusterPopupOpen} />
            )
          }
          dropProps={{ align: { top: "bottom" } }}
        />
      </div>
    </div>
  );
};

export default ClusterHead;
