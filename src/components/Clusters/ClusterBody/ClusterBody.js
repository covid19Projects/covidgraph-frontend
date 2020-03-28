import React from 'react';
import CasesContainer from "../../CasesContainer/CasesContainer";
import "./ClusterBody.scss";

const ClusterBody = props => {

    const {cases} = props;

    return (
        <div className="cluster-body-container">
            <div className="cases-container">
                <CasesContainer cases={cases}/>
            </div>
            <div className="network-graph-container"/>
        </div>
    );
};

export default ClusterBody;
