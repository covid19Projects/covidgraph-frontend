import React, { Component } from "react";
import search from "../../../assets/covid-search.svg";
import menu from "../../../assets/covid-menu.svg";
import add from "../../../assets/covid-add.svg";
import './ClusterHead.scss';
import CreateClusterContent from "../../DropButtonBody/CreateClusterContent.jsx";
import { DropButton } from "grommet";

class ClusterHead extends Component {
    constructor(props) {
        super(props);
        this.state = {showCreatePopUp: false};
    }

    render() {
        return (
            <div className="cluster-header">
                <div className="description">
                    <p className="title">Clusters</p>
                </div>
                <div className="controls">
                    <button className="icon"><img className="image" src={search}/></button>
                    <button className="icon"><img className="image" src={menu}/></button>
                    <button className="icon"><img className="image" src={add}/></button>
                    <DropButton
                        className="icon"
                        label="Create Cluster"
                        // open={open}
                        onOpen={() =>this.setState({showCreatePopUp: true})}
                        onClose={() =>this.setState({showCreatePopUp: false})}
                        dropContent={<CreateClusterContent onClose={() =>this.setState({showCreatePopUp: false})} />}
                        dropProps={{ align: { top: "bottom" } }}
                    />
                </div>
            </div>
        )
    }
}

export default ClusterHead;
