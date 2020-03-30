import React, {useEffect, useState} from 'react';
import './CasesContainer.scss';
import plus from "../../assets/plus.svg";
import CasesSearch from "../CasesSearch/CasesSearch";
import CasesListContainer from "../CasesListContainer/CasesListContainer";

const CasesContainer = props => {
  const {cases} = props;

  const [casesDetails, setCasesDetails] = useState(null);

  useEffect(() => {
    let casesObj = {};
    props.cases && props.cases.forEach(caseItem => {
      casesObj[caseItem.id] = {...caseItem, showCaseDetails: false}
    });
    setCasesDetails({...casesObj});
  }, [props]);

  const toggleCaseDetails = (caseId) => {
    const caseDetails = {[caseId]: casesDetails[caseId]};
    caseDetails[caseId].showCaseDetails = !caseDetails[caseId].showCaseDetails;
    setCasesDetails({...casesDetails, ...caseDetails});
  };

  const filterCases = queryInput => {
    let filteredCasesObj = {};
    props.cases && props.cases.forEach(caseItem => {
      if ((caseItem.id && caseItem.id.includes(queryInput)) || (caseItem.name && caseItem.name.includes(queryInput)))
        filteredCasesObj[caseItem.id] = {...caseItem, showCaseDetails: false}
    });
    setCasesDetails({...filteredCasesObj});
  };

  return (
    <div className="cases-container">
      <div className="cases-header">
        <label className="cases-label">CASES</label>
        <div>
          <img src={plus} alt=""/>
          <span className="cases-count-container">{cases.length} Cases</span>
        </div>
      </div>

      <CasesSearch filterCases={query => filterCases(query)}/>
      <CasesListContainer casesDetails={casesDetails} toggleCaseDetails={toggleCaseDetails}/>
    </div>
  );
};


export default CasesContainer;
