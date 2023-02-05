import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const IcuWardCare = () => {
  const rows = [
    { col1: "", col2: "", col3: "" },
    { col1: "", col2: "", col3: "" },
    { col1: "", col2: "", col3: "" },
    { col1: "", col2: "", col3: "" },
    { col1: "", col2: "", col3: "" },
    { col1: "", col2: "", col3: "" },
    { col1: "", col2: "", col3: "" },
    { col1: "", col2: "", col3: "" },
  ]
  const [columns, setColumns] = useState(3);

  const rowLabel = [
    "Observations & Course of Actions",
    "Medicines",
    "Tests to be done",
    "Specialist consultation?",
    "Other Notes",
    "Vitals & other monitoring",
    "Blood Transfusions",
    "Plan for Discharge?",
  ];

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm()
    }, 400);
  };

  return (
    <Formik
      initialValues={{ rows }}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue }) => (
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
                  Date
                </label>
                <Field name="dateofdischarge">
                  {({ form, field }) => {
                    const { setFieldValue } = form;
                    const { value } = field;
                    return (
                      <DateView
                        id="dateofdischarge"
                        {...field}
                        selected={value}
                        onChange={(val) =>
                          setFieldValue("dateofdischarge", val)
                        }
                      />
                    );
                  }}
                </Field>
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

            <div
              className="table-responsive mb-4"
              style={{ maxHeight: "470px", overflowY: "auto" }}
            >
              <table>
                <thead>
                  <tr>
                    <th></th>
                    {Array.from({ length: columns }).map((_, i) => (
                      <th className="text-center p-2" key={i}>
                        Day {i + 1}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {values.rows.map((row, index) => (
                    <tr key={index}>
                      <td className="fw-bold">{rowLabel[index]}</td>
                      {Array.from({ length: columns }).map((_, i) => (
                        <td key={i}>
                          <Field
                            as="textarea"
                            className="w-100"
                            name={`rows[${index}].col${i + 1}`}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
            className="btn btn-sm m-2 btn-primary"
              type="button"
              onClick={() => {
                setColumns(columns + 1);
              }}
            >
              Add Date
            </button>
            <button className="btn btn-sm m-2 btn-success" type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default IcuWardCare;
