import React, {Component} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './styles.scss';

class HeaderTabs extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="tabs">
            <Tabs>
                <div className="tab-heads">
                    <TabList>
                        <Tab>Overview</Tab>
                        <Tab>Emergency</Tab>
                        <Tab>Clusters</Tab>
                        <div className="helpline">
                            <p >Central Helpline Numbers:</p>
                            <p >987654676</p>
                        </div>
                    </TabList>

                </div>
                <div className="tab-panels">
                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
                </div>
            </Tabs>
        </div>
        )}

}
export default HeaderTabs;
