import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DateView from 'react-datepicker'
import TextError from "./TextError";
import "react-datepicker/dist/react-datepicker.css";

const initialValues = {
  date: "",
  patientID: "",
  age:"",
  anyotherpatientdetails:"",
  sex: "",
  consultantname:"",
  otherconsultation: "",
  otherconsultation1: "",
  admissiondate:"",
  dischargedate: "",
  patientcomplaint: "",
  probablediagnosis:"",
  otherdiagnosis: "",
  principaldiagnosis:"",
  history:"",
};

const validationSchema = Yup.object({
  date: Yup.string().required("Required"),
  patientID: Yup.string().required("Required"),
  age: Yup.string().required("Required"),
});

function MedicalHistory() {
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
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
            <div className="col-md-2 col-lg-2 col-sm-12">
              <label htmlFor="date" className="mb-2">
                Date
              </label>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12">
               <Field name="date">
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <DateView
              id="date"
              {...field}
              
              selected={value}
              onChange={val => setFieldValue("date", val)}
            />
          )
        }}
               </Field>
              <ErrorMessage name="date" component={TextError} />
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12 ">
              <label htmlFor="patientID" className="mb-2">
                Patient ID
              </label>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12 ">
              <Field type="number" id="patientID" name="patientID" />
              <ErrorMessage name="patientID" component={TextError} />
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12 ">
              <label htmlFor="age" className="mb-2">
                Age
              </label>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12 ">
              <Field type="number" id="age" name="age" />
              <ErrorMessage name="age" component={TextError} />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-4 col-lg-4 col-sm-12  align-items-center">
              <label htmlFor="anyotherpatientdetails">
                Any other Patient details:
              </label>
              {/* <ErrorMessage name='conditionondischarge' component={TextError} /> */}
            </div>
            <div className="col-md-8 col-lg-8 col-sm-12">
              <Field
                type="text"
                id="anyotherpatientdetails"
                name="anyotherpatientdetails"
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-2 col-lg-2 col-sm-12">
              <label htmlFor="sex" className="mb-2">
                Sex
              </label>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12">
              <Field
                type="text"
                id="sex"
                name="sex"
              />
              {/* <ErrorMessage name="patientID" component={TextError} /> */}
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12 ">
              <label htmlFor="consultantname" className="mb-2">
                Consultant Name
              </label>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12 ">
              <Field type="text" id="consultantname" name="consultantname" />
              {/* <ErrorMessage name="name" component={TextError} /> */}
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12 ">
              <label htmlFor="otherconsultation" className="mb-2">
                Other Consultation
              </label>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12 ">
              <Field type="text" id="otherconsultation" name="otherconsultation" />
              {/* <ErrorMessage name="dateofdischarge" component={TextError} /> */}
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-2 col-lg-2 col-sm-12">
              <label htmlFor="otherconsultation1" className="mb-2">
                Other Consultation
              </label>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12">
              <Field
                type="text"
                id="otherconsultation1"
                name="otherconsultation1"
              />
              {/* <ErrorMessage name="patientID" component={TextError} /> */}
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12 ">
              <label htmlFor="admissiondate" className="mb-2">
                Admission Date
              </label>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12 ">
               <Field name="admissiondate">
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <DateView
              id="admissiondate"
              {...field}
              
              selected={value}
              onChange={val => setFieldValue("admissiondate", val)}
            />
          )
        }}
               </Field>
              {/* <ErrorMessage name="name" component={TextError} /> */}
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12 ">
              <label htmlFor="dischargedate" className="mb-2">
                Discharge Date
              </label>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12 ">
               <Field name="dischargedate">
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <DateView
              id="dischargedate"
              {...field}
              
              selected={value}
              onChange={val => setFieldValue("dischargedate", val)}
            />
          )
        }}
               </Field>
              {/* <Field type="text" id="dischargedate" name="dischargedate" /> */}
              {/* <ErrorMessage name="dateofdischarge" component={TextError} /> */}
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 col-lg-3 col-sm-12  align-items-center">
              <label htmlFor="patientcomplaint">Patient Complaint</label>
              {/* <ErrorMessage name='comments' component={TextError} /> */}
            </div>
            <div className="col-md-6 col-lg-9 col-sm-12">
              <Field
                as="textarea"
                id="patientcomplaint"
                name="patientcomplaint"
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 col-lg-3 col-sm-12  align-items-center">
              <label htmlFor="probablediagnosis">Probable Diagnosis (Initial)</label>

              {/* <ErrorMessage name='comments' component={TextError} /> */}
            </div>
            <div className="col-md-6 col-lg-9 col-sm-12">
              <Field as="textarea" id="probablediagnosis" name="probablediagnosis" />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-12 col-lg-12 col-sm-12 ">
              <label htmlFor="otherdiagnosis">
                Other Diagnosis
              </label>
              <Field
                as="textarea"
                id="otherdiagnosis"
                name="otherdiagnosis"
                />
            </div>
          </div>

          <div className=" row mb-4">

          <div className="col-md-12 col-lg-12 col-sm-12 ">
          <label htmlFor="principaldiagnosis">
              Principal Diagnosis
          </label>

          <Field as="textarea" id="principaldiagnosis" name="principaldiagnosis" />
          </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-12 col-lg-12 col-sm-12 ">
              <label htmlFor="history">History</label>

              <Field as="textarea" id="history" name="history" />
            </div>
          </div>
          <div className="text-end">
          <button
            className="btn btn-success mt-4"
            type="submit"
          >
            Submit
          </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default MedicalHistory;
