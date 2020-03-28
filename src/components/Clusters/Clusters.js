import React from 'react';
import {Accordion} from 'react-accessible-accordion';
import ClusterAccordionItem from "./ClusterAccordionItem/ClusterAccordionItem";

const Clusters = props => {
    const clusters = [{
        place: 'Visakhapatnam',
        cases: [{id: 'C123', age: 23, gender: 'male', location: '', description: ''}]
    }, {
        place: 'Hyderabad',
        cases: [{id: 'C123', age: 23, gender: 'male', location: '', description: ''}]
    }, {
        place: 'Vijayawada',
        cases: [{id: 'C123', age: 23, gender: 'male', location: '', description: ''}]
    }, {
        place: 'Kakinada',
        cases: [{id: 'C123', age: 23, gender: 'male', location: '', description: ''}]
    }];

    return (<Accordion allowZeroExpanded={true}> {
        clusters.map(cluster =>
            <ClusterAccordionItem cluster={cluster}/>
        )
    } </Accordion>)
};

export default Clusters;
