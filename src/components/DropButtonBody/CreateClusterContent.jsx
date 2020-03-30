import React, {Component} from "react";
import {Box, Button, Form, FormField, Select, TextInput} from "grommet";
import "./CreateClusterContent.scss"

class CreateClusterContent extends Component {
    constructor(props){
        super(props);
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
                            value={""}
                            placeholder={"ex: State(AP)"}
                            onChange={({ option }) => {}}
                        />
                    </FormField>
                    <FormField label="Cluster Name">
                        <TextInput plain placeholder="ex: Vijayawada" />
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
