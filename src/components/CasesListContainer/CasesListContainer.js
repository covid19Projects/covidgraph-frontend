import React, { useState } from "react";
import "./CasesListContainer.scss";
import plus from "../../assets/plus.svg";
import angleRight from "../../assets/angel-right.svg";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";

const CasesListContainer = ({
  casesDetails,
  toggleCaseDetails,
  toggleSuspectForm,
  clusterName
}) => {
  return (
    <div className="cases-list-container">
      {casesDetails ? (
        Object.keys(casesDetails).map(caseId => {
          const caseItem = casesDetails[caseId];
          return (
            <div className="case-item" key={caseId}>
              <div className="case-header">
                <div
                  className="case-header-details"
                  onClick={() => toggleCaseDetails(caseId)}
                >
                  <img
                    className={caseItem.showCaseDetails ? "open" : "close"}
                    src={angleRight}
                    alt="img"
                  />
                  <span className="case-id">{caseItem.id}</span>
                </div>
                <div className="case-header-controls">
                  <img src={plus}
                  onClick={() => {
                    const newCaseItem = {contactedWith: caseItem, cluster: clusterName};
                    toggleSuspectForm(newCaseItem);
                  }}
                  alt="img" />
                  <img
                    src={editIcon}
                    onClick={() => {
                      toggleSuspectForm({
                        ...caseItem,
                        cluster: clusterName
                      });
                    }}
                    alt="img"
                  />
                  <img src={deleteIcon} alt="img" />
                </div>
              </div>
              {caseItem.showCaseDetails && (
                <div className="case-details">
                  <table className="case-details-table">
                    <tbody>
                      <tr>
                        <td className="label">Name</td>
                        <td className="fieldValue">{caseItem.name}</td>
                      </tr>
                      <tr>
                        <td className="label">Age</td>
                        <td className="fieldValue">{caseItem.age}</td>
                      </tr>
                      <tr>
                        <td className="label">Status</td>
                        <td className="fieldValue">{caseItem.status}</td>
                      </tr>
                      <tr>
                        <td className="label">Location</td>
                        <td className="fieldValue">{caseItem.location}</td>
                      </tr>
                      <tr>
                        <td className="label">Notes</td>
                        <td className="fieldValue">{caseItem.notes}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          );
        })
      ) : (
        <span>No Cases Yet</span>
      )}
    </div>
  );
};

export default CasesListContainer;
