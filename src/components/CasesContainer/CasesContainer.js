import React, {Fragment} from 'react';
import './ClusterContainer.scss';

const CasesContainer = props => {

    const {cases} = props;

    return (
        <Fragment className="cases-container">
            <div>
                <label className="cases-label">CASES</label>
            </div>
        </Fragment>
    );
};


export default CasesContainer;
