import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../Tabs/TabHeader.scss";
import Clusters from "../Clusters/Clusters";
import ClusterHead from "../Clusters/ClusterHead/ClusterHead";
import overview from "../../assets/overview.png"
import CreateSuspectForm from "../CreateSuspectForm/CreateSuspectForm";

class TabHeader extends Component {
    constructor(props) {
        super(props);
        this.state={shouldShowForm:false};
        this.showAddSuspectForm = this.showAddSuspectForm.bind(this)
    }

    showAddSuspectForm() {
        this.setState({shouldShowForm: true})
    }
    render() {
    return (
      <div className="tabs">
        <Tabs>
          <div className="tab-heads">
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Clusters</Tab>
            </TabList>
            <div className="helpline">
              <p>Central Helpline Numbers:</p>
              <p>+91-11-23978046 or 1075</p>
            </div>
          </div>
          <div className="tab-panels">
            <TabPanel>
              <img src={overview}></img>
            </TabPanel>
            <TabPanel>
              <div className="clusters-tab-panel">
                <ClusterHead showAddSuspectForm={this.showAddSuspectForm}/>
                <Clusters />
                {this.state.shouldShowForm ? <CreateSuspectForm />: null}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default TabHeader;
