import React from "react";

import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";
import ClusterBody from "../ClusterBody/ClusterBody";
import "./ClusterAccordionItem.scss";

const ClusterAccordionItem = props => {
  const { cluster } = props;
  return (
    <AccordionItem className="cluster-accordion-item">
      <AccordionItemHeading>
        <AccordionItemButton>{cluster.name}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <ClusterBody cluster={cluster} />
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default ClusterAccordionItem;
