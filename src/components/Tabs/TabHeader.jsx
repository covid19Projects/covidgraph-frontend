import React, {Component} from "react";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../Tabs/TabHeader.scss';
import Clusters from "../Clusters/Clusters";

class TabHeader extends Component {
    render() {
        return (
            <div className="tabs">
                <Tabs>
                    <div className="tab-heads">
                        <TabList>
                            <Tab>Overview</Tab>
                            <Tab>Emergency</Tab>
                            <Tab>Clusters</Tab>
                        </TabList>
                        <div className="helpline">
                            <p>Central Helpline Numbers:</p>
                            <p>987654676</p>
                        </div>
                    </div>
                    <div className="tab-panels">
                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <div className="clusters-tab-panel">
                                <Clusters/>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        )
    }

}

export default TabHeader;
