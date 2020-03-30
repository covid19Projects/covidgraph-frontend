import React, {Component} from "react";
import {Box, Button, Form, FormField, Select, TextInput} from "grommet";
import "./CreateClusterContent.scss"

class CreateClusterContent extends Component {
    constructor(props){
        super(props);
        this.state = {clusterTitle: '', clusterName: ''};
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
                            options={['AndhraPradesh', 'Telangana', 'Punjab', 'Kerala']}
                            value={this.state.clusterTitle}
                            placeholder={"ex: State(AP)"}
                            onChange={({ option }) => {this.setState({clusterTitle: option})}}
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
                    <Button type="submit"  label="Cancel" />
                    <Button className="submit-btn" type="submit" primary label="Submit" />
                </Form>
            </Box>
            </div>
        )
    }

}
export default CreateClusterContent;
