import React, {Component} from "react";
import {Box, Button, Form, FormField, Header, Layer, Select, TextInput} from "grommet";
import {createPersonWithExistingCluster} from "../../db.js"
import "./CreateSuspectForm.scss"

class CreateSuspectForm extends Component {
    setCluster = (cluster) => {
        this.setState({cluster: cluster.value})
    };

    setSuspectAge = (event) => {
        this.setState({suspectAge: event.target.value})
    };

    setContactedWith = (contactedWith) => {
        this.setState({contactedWith: contactedWith.value})
    };

    setCaseID = (event) => {
        this.setState({caseId:event.target.value})
    };

    setName = (event) => {
        this.setState({name:event.target.value})
    };

//     setGender=(gender) => {
//         this.setState({gender:gender.value})
//     };

    setLocation=(location)=> {
        this.setState({location:location.value})
    };

    setStatus=(status)=> {
        this.setState({status:status.value})
    };

    setGovernmentIdType=(governmentIdType)=> {
        this.setState({governmentIdType:governmentIdType.value})

    };

    setGovernmentId=(event)=> {
        this.setState({governmentId:event.target.value})
    };

    setNotes=(event)=> {
        this.setState({notes:event.target.value})
    };

    createSuspect=()=> {
        this.props.onClose();
        let{caseId,name,cluster,contactedWith,suspectAge:age,gender,status,location,governmentIdType,governmentId,notes}= this.state;
        const suspect = {
            id:caseId,
            name:name,
            age:age,
            status:status,
            location:location,
            governmentIdType:governmentIdType,
            governmentId:governmentId,
            notes:notes
        };
        return createPersonWithExistingCluster(cluster, suspect);
    };

    render() {
        return (
            <Layer position="top"
                   modal
                   onClickOutside={() => {
                   }}
                   onEsc={() => {
                   }}>
                <Box className="box"
                     overflow="auto"
                     as="form"
                     fill="vertical"
                     width="large"
                     pad="medium"
                     onSubmit={() => {
                     }}>
                    <Form className="case-creation-dialog">
                        <Header size={"medium"} className="add-suspect-title">Add Suspect</Header>
                        <FormField label={"Case ID"} className="mt-15 case-create-dialog-label">
                            <TextInput
                                required
                                onChange={this.setCaseID}
                                className="caseId"
                                id="caseId"
                            />
                        </FormField>
                        <FormField label={"Name"} className="mt-15 case-create-dialog-label">
                            <TextInput
                                required
                                onChange={this.setName}
                                className="name"
                                id="name"
                            />
                        </FormField>
                        <div className="inline mt-15">
                            <FormField label={"Cluster"} className="case-create-dialog-label">
                                <Select
                                    placeholder="Select"
                                    required
                                    options={["Andhra Pradesh", "Telangana", "Delhi",]}
                                    onChange={this.setCluster}
                                    className="clusterInput"
                                    id="clusterName"/>
                            </FormField>
                            <FormField label={"Contacted With"} className="case-create-dialog-label">
                                <Select
                                    options={[]}
                                    required
                                    onChange={this.setContactedWith}
                                    closeOnChange={false}
                                    multiple
                                    placeholder="Select"
                                    className="contactedWith"
                                    id="contactsInput"/>
                            </FormField>
                        </div>
                        <br/>
                        <div className="inline mt-15">
                            <FormField label={"Age"} className="case-create-dialog-label">
                                <TextInput
                                    className="age"
                                    required
                                    onChange={this.setSuspectAge}
                                    id="ageInput"/>
                            </FormField>
{/*                             <FormField label={"Gender"}> * case-create-dialog-label/}
{/*                                 <Select */}
{/*                                     options={["Male", "Female", "Transgender","Prefer Not To Mention"]} */}
{/*                                     onChange={this.setGender} */}
{/*                                     className="gender" */}
{/*                                     required */}
{/*                                     id="genderInput"/> */}
{/*                             </FormField> */}
                            <FormField label={"Status"} className="case-create-dialog-label">
                                <Select
                                    options={["Tracked", "Not Tracked","Being Tracked"]}
                                    onChange={this.setStatus}
                                    required
                                    className="status"
                                    id="statusInput"/>
                            </FormField>
                        </div>
                        <FormField label={"Location"} className="mt-15 case-create-dialog-label">
                            <Select
                                options={["Confirmed", "Quarantined"]}
                                onChange={this.setLocation}
                                required
                                className="location"
                                id="location"/>
                        </FormField>
                        <div className="inline mt-15">
                            <FormField label={"Government ID Type"} className="case-create-dialog-label">
                                <Select
                                    options={["PAN", "Aadhaar","Ration Card"]}
                                    onChange={this.setGovernmentIdType}
                                    required
                                    className="governmentIdtype"
                                    id="idType"/>
                            </FormField>
                            <FormField label={"Government ID"} className="case-create-dialog-label">
                                <TextInput
                                    onChange={this.setGovernmentId}
                                    required
                                    className="governmentId"
                                    id="idInput"/>
                            </FormField>
                        </div>
                        <FormField label={"Notes"} className="mt-15 case-create-dialog-label">
                            <TextInput
                                required
                                onChange={this.setNotes}
                                label={"Notes"}
                                className="notes"
                                id="notesInput"/>
                        </FormField>
                        <div className="case-create-dialog-footer">
                            <Button onClick={this.props.onClose} label={"Cancel"} className="cancel-button"/>
                            <Button onClick={this.createSuspect} className="add-button"
                                label={"Add"}/>

                        </div>


                    </Form>
                </Box>
            </Layer>
        )
    }
}

export default CreateSuspectForm
