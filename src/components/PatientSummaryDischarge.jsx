import React from "react";
import { Formik, Form, Field} from "formik";
import jsPDF from 'jspdf';
import _ from 'lodash';
import DateView from 'react-datepicker'
import html2canvas from "html2canvas";
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
  testsdone:'',
  medication:'',
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

const PatientDetails = ({ formikProps }) => {
    return (
      <div>
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
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12 ">
              <label htmlFor="patientID" className="mb-2">
                Patient ID
              </label>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12 ">
              <Field type="number" id="patientID" name="patientID" />
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12 ">
              <label htmlFor="age" className="mb-2">
                Age
              </label>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12 ">
              <Field type="number" id="age" name="age" />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-4 col-lg-4 col-sm-12  align-items-center">
              <label htmlFor="anyotherpatientdetails">
                Any other Patient details:
              </label>
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
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12 ">
              <label htmlFor="consultantname" className="mb-2">
                Consultant Name
              </label>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12 ">
              <Field type="text" id="consultantname" name="consultantname" />
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12 ">
              <label htmlFor="otherconsultation" className="mb-2">
                Other Consultation
              </label>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12 ">
              <Field type="text" id="otherconsultation" name="otherconsultation" />            </div>
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
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 col-lg-3 col-sm-12  align-items-center">
              <label htmlFor="patientcomplaint">Patient Complaint</label>
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
      </div>
    );
  };

const DiagnosisInformation = ({ formikProps }) => {
    return (
      <div>
        <div className="row mb-4">
            <div className="col-md-12 col-lg-12 col-sm-12 ">
              <label htmlFor="testsdone">Tests Done</label>

              <Field as="textarea" id="testsdone" name="testsdone" />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-12 col-lg-12 col-sm-12 ">
              <label htmlFor="medication">Medication During Hospitalization</label>

              <Field as="textarea" id="medication" name="medication" />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-3 col-lg-3 col-sm-12">
              <label htmlFor="conditionondischarge">
                Condition on Discharge
              </label>
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
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12">
              <Field type="text" id="dischargetype" name="dischargetype" />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-3 col-lg-3 col-sm-12">
              <label htmlFor="advice">Advice</label>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12">
              <Field type="text" id="advice" name="advice" />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12">
              <label htmlFor="diet">Diet</label>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12">
              <Field type="text" id="diet" name="diet" />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-3 col-lg-3 col-sm-12">
              <label htmlFor="followup">Follow Up</label>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12">
              <Field type="text" id="followup" name="followup" />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12">
              <label htmlFor="listofpendingreports">
                List of Pending Reports
              </label>
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
            </div>
            <div className="col-md-6 col-lg-9 col-sm-12">
              <Field as="textarea" id="othernote" name="othernote" />
            </div>
          </div>
      </div>
    );
  };

function PatientSummaryDischarge() {
    // const formRef = React.createRef();
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));

      

// html2canvas(formRef.current).then(canvas => {
//     const pdf = new jsPDF("p", "mm", "a4");
//     pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
//     pdf.save("form.pdf");
//   });
        const pdf = new jsPDF("p", "mm", "a4");

        html2canvas(document.querySelector(".patient-details")).then((canvas) => {
        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 5, 0, 200, 298);

    });
    
    html2canvas(document.querySelector(".diagnosis-information")).then(
        (canvas) => {
        pdf.addPage();
        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 5, 0, 200, 298);
        pdf.save("form.pdf");
        }
    );
    
      setSubmitting(false);
      resetForm();
    }, 400);
  };
  
  return (
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    >
        {(formikProps) => (
      <Form >
        <div className="container mt-4 pt-3">
           
        <div className="patient-details">
        <div className="text-center mb-4">
                <h2>SPANDAN MULTI SPECIALITY</h2>
                <span className="fw-bold">HOSPITAL TREATMENT - DISCHARGE SUMMARY </span>
            </div>
            <PatientDetails formikProps={formikProps} />
          </div>
          <div className="diagnosis-information">
            <DiagnosisInformation formikProps={formikProps} />
          </div>
          <div className="text-end">
          <button
            className="btn btn-success mt-4"
            type="submit"
          >
            Print
          </button>
          </div>
        </div>
      </Form>
        )}
    </Formik>
  );
}

export default PatientSummaryDischarge;
