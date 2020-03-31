import React, { Component } from "react";
import {
  Box,
  Button,
  Form,
  FormField,
  Header,
  Layer,
  Select,
  TextInput
} from "grommet";
import { createPersonWithExistingCluster, editAPerson } from "../../db.js";
import "./SuspectForm.scss";
import { Formik } from "formik";

const SuspectForm = ({
  caseToEdit,
  onClose,
  addPersonToCluster,
  updatePersonInCluster,
  setEditSuspectFormData
}) => {
  const defaultCase = {};
  const isEditing = !!caseToEdit;
  const headingText = isEditing ? `Edit Suspect` : "Add Suspect";
  const submitButtonLabel = isEditing ? "Save" : "Add";
  console.log("EDITING PERSON", caseToEdit);

  return (
    <Formik
      initialValues={isEditing ? caseToEdit : defaultCase}
      onSubmit={async (values, { setSubmitting }) => {
        const { id, name, cluster, age, status, location, notes } = values;

        const updatedPerson = {
          id,
          name,
          age,
          status,
          location,
          notes
        };
        console.log(cluster);
        if (isEditing) {
          await editAPerson(updatedPerson);
          updatePersonInCluster(cluster, updatedPerson);
          setEditSuspectFormData(false);
        } else if (!isEditing) {
          await createPersonWithExistingCluster(cluster, updatedPerson);
          addPersonToCluster(cluster, updatedPerson);
        }
        setSubmitting(false);
        onClose();
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue
      }) => (
        <Layer position="top" modal onClickOutside={() => {}} onEsc={() => {}}>
          <Box
            className="box"
            overflow="auto"
            as="form"
            fill="vertical"
            width="large"
            pad="medium"
            onSubmit={() => {}}
          >
            <Form className="case-creation-dialog" onSubmit={handleSubmit}>
              <Header size={"medium"} className="add-suspect-title">
                {headingText}
              </Header>
              <FormField
                label={"Case ID"}
                className="mt-15 case-create-dialog-label"
              >
                <TextInput
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.id}
                  className="id"
                  id="id"
                />
              </FormField>
              <FormField
                label={"Name"}
                className="mt-15 case-create-dialog-label"
              >
                <TextInput
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className="name"
                  id="name"
                />
              </FormField>
              <div className="inline mt-15">
                <FormField
                  label={"Cluster"}
                  className="case-create-dialog-label"
                >
                  <Select
                    placeholder="Select"
                    options={['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal']}
                    onChange={({ value }) => setFieldValue("cluster", value)}
                    value={values.cluster}
                    onBlur={handleBlur}
                    className="clusterInput"
                    id="cluster"
                  />
                </FormField>
                <FormField
                  label={"Contacted With"}
                  className="case-create-dialog-label"
                >
                  <Select
                    options={[]}
                    onChange={({ value }) =>
                      setFieldValue("contactWidth", value)
                    }
                    onBlur={handleBlur}
                    values={values.contactedWith}
                    closeOnChange={false}
                    multiple
                    placeholder="Select"
                    className="contactedWith"
                    id="contactedWith"
                  />
                </FormField>
              </div>
              <br />
              <div className="inline mt-15">
                <FormField label={"Age"} className="case-create-dialog-label">
                  <TextInput
                    className="age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                    id="age"
                  />
                </FormField>
                <FormField
                  label={"Status"}
                  className="case-create-dialog-label"
                >
                  <Select
                    options={[
                      "Untracked",
                      "Tracked",
                      "Tested",
                      "Positive",
                      "Negative",
                      "Cured",
                      "Dead"
                    ]}
                    onChange={({ value }) => setFieldValue("status", value)}
                    value={values.status}
                    onBlur={handleBlur}
                    required
                    className="status"
                    id="status"
                  />
                </FormField>
              </div>
              <FormField
                label={"Location"}
                className="mt-15 case-create-dialog-label"
              >
                <Select
                  options={["Home Isolation", "Hospitalized"]}
                  onChange={({ value }) => setFieldValue("location", value)}
                  onBlur={handleBlur}
                  value={values.location}
                  className="location"
                  id="location"
                />
              </FormField>

              <div className="inline mt-15">
                <FormField
                  label={"Government ID Type"}
                  className="case-create-dialog-label"
                >
                  <Select
                    options={["PAN", "Aadhaar", "Ration Card"]}
                    onChange={({ value }) =>
                      setFieldValue("governmentIdType", value)
                    }
                    onBlur={handleBlur}
                    value={values.governmentIdType}
                    className="governmentIdType"
                    id="governmentIdType"
                  />
                </FormField>
                <FormField
                  label={"Government ID"}
                  className="case-create-dialog-label"
                >
                  <TextInput
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.governmentId}
                    className="governmentId"
                    id="governmentId"
                  />
                </FormField>
              </div>
              <FormField
                label={"Notes"}
                className="mt-15 case-create-dialog-label"
              >
                <TextInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.notes}
                  label={"Notes"}
                  className="notes"
                  id="notes"
                />
              </FormField>
              <div className="case-create-dialog-footer">
                <Button
                  onClick={() => {
                    onClose();
                    if (isEditing) {
                      setEditSuspectFormData(false);
                    }
                  }}
                  label={"Cancel"}
                  className="cancel-button"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="add-button"
                  label={submitButtonLabel}
                />
              </div>
            </Form>
          </Box>
        </Layer>
      )}
    </Formik>
  );
};

export default SuspectForm;
