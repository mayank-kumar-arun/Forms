import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  patientID: "",
  name: "",
  dateofdischarge: "",
  sex: "",
  conditionondischarge: "",
  dischargetype: "",
  advice: "",
  diet: "",
  followup: "",
  listofpendingreports: "",
  emergencycontact: "",
  preventivecounselling: "",
  medicationatdischarge: "",
  othernote: "",
};

const validationSchema = Yup.object({
  patientID: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
  dateofdischarge: Yup.string().required("Required"),
  sex: Yup.string().required("Required"),
});

function DischargeNotes() {

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm()
    }, 400);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="container mt-4 pt-3">
          <div className="row mb-4">
            <div className="col-md-3 col-lg-3 col-sm12 d-flex flex-column">
              <label htmlFor="patientID" className="mb-2">
                Patient ID
              </label>
              <Field
                className="inputField"
                type="number"
                id="patientID"
                name="patientID"
              />
              <ErrorMessage name="patientID" component={TextError} />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12 d-flex flex-column">
              <label htmlFor="name" className="mb-2">
                Name
              </label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component={TextError} />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12 d-flex flex-column">
              <label htmlFor="dateofdischarge" className="mb-2">
                Date of Discharge
              </label>
              <Field type="text" id="dateofdischarge" name="dateofdischarge" />
              <ErrorMessage name="dateofdischarge" component={TextError} />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12 d-flex flex-column">
              <label htmlFor="sex" className="mb-2">
                Sex
              </label>
              <Field type="sex" id="sex" name="sex" />
              <ErrorMessage name="sex" component={TextError} />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-3 col-lg-3 col-sm-12">
              <label htmlFor="conditionondischarge">
                Condition on Discharge
              </label>
              {/* <ErrorMessage name='conditionondischarge' component={TextError} /> */}
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12">
              <Field
                type="text"
                id="conditionondischarge"
                name="conditionondischarge"
              />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12">
              <label htmlFor="dischargetype">Discharge Type</label>
              {/* <ErrorMessage name='dischargetype' component={TextError} /> */}
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12">
              <Field type="text" id="dischargetype" name="dischargetype" />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-3 col-lg-3 col-sm-12">
              <label htmlFor="advice">Advice</label>
              {/* <ErrorMessage name='conditionondischarge' component={TextError} /> */}
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12">
              <Field type="text" id="advice" name="advice" />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12">
              <label htmlFor="diet">Diet</label>
              {/* <ErrorMessage name='dischargetype' component={TextError} /> */}
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12">
              <Field type="text" id="diet" name="diet" />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-3 col-lg-3 col-sm-12">
              <label htmlFor="followup">Follow Up</label>

              {/* <ErrorMessage name='conditionondischarge' component={TextError} /> */}
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12">
              <Field type="text" id="followup" name="followup" />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12">
              <label htmlFor="listofpendingreports">
                List of Pending Reports
              </label>
              {/* <ErrorMessage name='dischargetype' component={TextError} /> */}
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12">
              <Field
                type="text"
                id="listofpendingreports"
                name="listofpendingreports"
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-3 col-lg-3 col-sm-12">
              <label htmlFor="emergencycontact">Emergency Contact</label>

              {/* <ErrorMessage name='conditionondischarge' component={TextError} /> */}
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12">
              <Field
                type="number"
                id="emergencycontact"
                name="emergencycontact"
              />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12">
              <label htmlFor="preventivecounselling">
                Preventive Counselling
              </label>
              {/* <ErrorMessage name='dischargetype' component={TextError} /> */}
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12">
              <Field
                type="text"
                id="preventivecounselling"
                name="preventivecounselling"
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 col-lg-3 col-sm-12 d-flex align-items-center">
              <label htmlFor="medicationatdischarge">
                Medication at Discharge
              </label>
              {/* <ErrorMessage name='comments' component={TextError} /> */}
            </div>
            <div className="col-md-6 col-lg-9 col-sm-12">
              <Field
                as="textarea"
                id="medicationatdischarge"
                name="medicationatdischarge"
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 col-lg-3 col-sm-12 d-flex align-items-center">
              <label htmlFor="othernote">Other Note</label>

              {/* <ErrorMessage name='comments' component={TextError} /> */}
            </div>
            <div className="col-md-6 col-lg-9 col-sm-12">
              <Field as="textarea" id="othernote" name="othernote" />
            </div>
          </div>

          <button
          className="btn btn-primary buttonFullWidth mt-4"
            type="submit"
            //   disabled={!formik.isValid || formik.isSubmitting}
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default DischargeNotes;
