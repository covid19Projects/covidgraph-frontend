import React, { Component } from "react";
import search from "../../../assets/covid-search.svg";
import menu from "../../../assets/covid-menu.svg";
import add from "../../../assets/covid-add.svg";
import "./ClusterHead.scss";

class ClusterHead extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cluster-header">
        <div className="description">
          <p className="title">Clusters</p>
          <p className="body">Lorem Ipsum is simply dummy text.</p>
        </div>
        <div className="controls">
          <button className="icon">
            <img className="image" src={search} />
          </button>
          <button className="icon">
            <img className="image" src={menu} />
          </button>
          <button className="icon">
            <img className="image" src={add} />
          </button>
          <button className="icon">Create Cluster</button>
        </div>
      </div>
    );
  }
}

export default ClusterHead;
