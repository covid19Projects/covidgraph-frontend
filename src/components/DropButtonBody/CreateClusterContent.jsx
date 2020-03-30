import React, {Component} from "react";
import {Box, Button, Form, FormField, Select, TextInput} from "grommet";
import "./CreateClusterContent.scss"
import {runCypherQuery, createClusterCommand} from "../../db.js"

class CreateClusterContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            stateValue: ''
        }
        this.onChangeText = this.onChangeText.bind(this);
        this.onCreateCluster = this.onCreateCluster.bind(this);
        this.setStateValue = this.setStateValue.bind(this);

    }

    onChangeText(event)  {
    console.log(event.target.value);
    this.setState({value: event.target.value});
    }

    setStateValue(option) {
      this.setState({stateValue: option});
    }

    // const [value, onChangeText] = React.useState();

    async onCreateCluster() {
      const name = await runCypherQuery(createClusterCommand(this.state.value));
      //if (await name) {
        this.props.onClose();
      //}
    }

    render(){
        return (
            <div className="create-content">
                <Box className="box"
                    width="large"
                    direction="row"
                    align="center"
                    pad={{ horizontal: "small", vertical: "xsmall" }}
                    round="small"
                    elevation={"medium" }
                    border={{
                        side: "all",
                        color: "border"
                    }}
                    style={
                        {
                            borderBottomLeftRadius: "0px",
                            borderBottomRightRadius: "0px"
                        }
                    }
                >
                <Form className="form">
                    <FormField label="Select a Cluster Title">
                        <Select
                            options={['Andhra Pradesh (AP)','Arunachal Pradesh (AR)','Assam (AS)','Bihar (BR)','Chhattisgarh (CG)','Goa (GA)','Gujarat (GJ)','Haryana (HR)','Himachal Pradesh (HP)','Jammu and Kashmir (JK)','Jharkhand (JH)','Karnataka (KA)','Kerala (KL)','Madhya Pradesh (MP)','Maharashtra (MH)','Manipur (MN)','Meghalaya (ML)','Mizoram (MZ)','Nagaland (NL)','Odisha(OR)','Punjab (PB)','Rajasthan (RJ)','Sikkim (SK)','Tamil Nadu (TN)','Telangana (TS)','Tripura (TR)','Uttar Pradesh (UP)','Uttarakhand (UK)','West Bengal (WB)']}
                            value={this.state.stateValue}
                            placeholder={"ex: State(AP)"}
                            onChange={({ option }) => this.setStateValue(option)}
                        />
                    </FormField>
                    <FormField label="Cluster Name">
                        <TextInput
                            value={this.state.clusterName}
                            plain
                            placeholder="ex: Vijayawada"
                            onChange={(event) => {this.setState({clusterName: event.target.value})}}
                        />
                    </FormField>
                    <div className="buttons-footer">
                        <Button onClick={() => this.props.onClose()} label="Cancel" />
                        <Button onClick={this.onCreateCluster} className="submit-btn" type="submit" primary label="Submit" />
                    </div>
                </Form>
            </Box>
            </div>
        )
    }

}
export default CreateClusterContent;