import React from 'react';

import searchIcon from "../../assets/search.svg"
import "./CasesSearch.scss";

const CasesSearch = props => (
  <div className="cases-search">
    <div className="image-placeholder"><img src={searchIcon}/></div>
    <input className="truncate outline-none" placeholder="ex: c123" onChange={val => {
      props.filterCases(val.target.value);
    }}/>
    <div></div>
  </div>
);

export default CasesSearch;
