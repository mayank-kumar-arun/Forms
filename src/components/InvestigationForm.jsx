import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import * as Yup from "yup";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  hematologyLabel,
  hematologyRow,
  urineRow,
  urineLabel,
  bloodSugarLabel,
  bloodSugarRow,
  renalLabel,
  renalRow,
  hepticLabel,
  hepticRow,
  cardiacLabel,
  cardiacRow,
  otherLabel,
  otherRow,
} from "./InvestigationFormData";

const InvestigationForm = () => {
  // Hematology

  const [rows, setRows] = useState(hematologyRow);
  const [columns, setColumns] = useState(3);
  const [rowLabel, setRowLabel] = useState(hematologyLabel);
  const [addRowLabel, setAddRowLabel] = useState("");
  const [disable, setDisability] = useState(true);
  const onChangeHandler = (event) => {
    setAddRowLabel(event.target.value);
    if (event.target.value !== "") {
      setDisability(false);
    }
  };

  //   Urine
  const [rowsUrine, setrowsUrine] = useState(urineRow);
  const [urineRowLabel, setUrineRowLabel] = useState(urineLabel);
  const [columnsUrine, setColumnsUrine] = useState(3);
  const [addUrineRowLabel, setAddUrineRowLabel] = useState("");
  const [disableUrineAddRowBtn, setUrineAddRowBtnDisability] = useState(true);

  const onUrineLabelChangeHandler = (event) => {
    setAddUrineRowLabel(event.target.value);
    if (event.target.value !== "") {
      setUrineAddRowBtnDisability(false);
    }
  };

  //   Blood Sugar

  const [rowsBloodSugar, setrowsBloodSugar] = useState(bloodSugarRow);
  const [bloodSugarRowLabel, setBloodSugarRowLabel] = useState(bloodSugarLabel);
  const [columnsBloodSugar, setColumnsBloodSugar] = useState(3);
  const [addBloodSugarRowLabel, setAddBloodSugarLabel] = useState("");
  const [disableBloodSugarAddRowBtn, setBloodSugarAddRowBtnDisability] =
    useState(true);

  const onBloodSugarLabelChangeHandler = (event) => {
    setAddBloodSugarLabel(event.target.value);
    if (event.target.value !== "") {
      setBloodSugarAddRowBtnDisability(false);
    }
  };

  // Renal

  const [rowsRenal, setrowsRenal] = useState(renalRow);
  const [renalRowLabel, setRenalRowLabel] = useState(renalLabel);
  const [columnsRenal, setColumnsRenal] = useState(3);
  const [addRenalRowLabel, setAddRenalLabel] = useState("");
  const [disableRenalAddRowBtn, setRenalAddRowBtnDisability] = useState(true);

  const onRenalLabelChangeHandler = (event) => {
    setAddRenalLabel(event.target.value);
    if (event.target.value !== "") {
      setRenalAddRowBtnDisability(false);
    }
  };

  // Heptic

  const [rowsHeptic, setrowsHeptic] = useState(hepticRow);
  const [hepticRowLabel, setHepticRowLabel] = useState(hepticLabel);
  const [columnsHeptic, setColumnsHeptic] = useState(3);
  const [addHepticRowLabel, setAddHepticLabel] = useState("");
  const [disableHepticAddRowBtn, setHepticAddRowBtnDisability] = useState(true);

  const onHepticLabelChangeHandler = (event) => {
    setAddHepticLabel(event.target.value);
    if (event.target.value !== "") {
      setHepticAddRowBtnDisability(false);
    }
  };

  // Cardiac

  const [rowsCardiac, setrowsCardiac] = useState(cardiacRow);
  const [cardiacRowLabel, setCardiacRowLabel] = useState(cardiacLabel);
  const [columnsCardiac, setColumnsCardiac] = useState(3);
  const [addCardiacRowLabel, setAddCardiacLabel] = useState("");
  const [disableCardiacAddRowBtn, setCardiacAddRowBtnDisability] =
    useState(true);

  const onCardiacLabelChangeHandler = (event) => {
    setAddCardiacLabel(event.target.value);
    if (event.target.value !== "") {
      setCardiacAddRowBtnDisability(false);
    }
  };

  // Other

  const [rowsOther, setrowsOther] = useState(otherRow);
  const [OtherRowLabel, setOtherRowLabel] = useState(otherLabel);
  const [columnsOther, setColumnsOther] = useState(3);
  const [addOtherRowLabel, setAddOtherLabel] = useState("");
  const [disableOtherAddRowBtn, setOtherAddRowBtnDisability] = useState(true);

  const onOtherLabelChangeHandler = (event) => {
    setAddOtherLabel(event.target.value);
    if (event.target.value !== "") {
      setOtherAddRowBtnDisability(false);
    }
  };

  const validationSchema = Yup.object({
    date: Yup.string().required("Required"),
    patientID: Yup.string().required("Required"),
    age: Yup.string().required("Required"),
    sex: Yup.string().required("Required"),
    cnslt: Yup.string().required("Required"),
    name: Yup.string().required("Required"),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm()
    }, 400);
  };

  return (
    <Formik
      initialValues={{
        rows,
        rowsUrine,
        rowsBloodSugar,
        rowsRenal,
        rowsHeptic,
        rowsCardiac,
        rowsOther,
        patientID: '',
        name:'',
        age:'',
        cnslt:'',
        sex:'',
        date:''
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div className="container mt-4 pt-3">
            <div className="row mb-4">
              <div className="col-md-4 col-lg-4 col-sm-12 d-flex flex-column">
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
              <div className="col-md-4 col-lg-4 col-sm-12 d-flex flex-column">
                <label htmlFor="name" className="mb-2">
                  Name
                </label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component={TextError} />
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12 d-flex flex-column">
                <label htmlFor="age" className="mb-2">
                  Age
                </label>
                <Field type="number" id="age" name="age" />
                <ErrorMessage name="age" component={TextError} />
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12 d-flex flex-column">
                <label htmlFor="cnslt" className="mb-2">
                  CNSLT
                </label>
                <Field type="text" id="cnslt" name="cnslt" />
                <ErrorMessage name="cnslt" component={TextError} />
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12 d-flex flex-column">
                <label htmlFor="sex" className="mb-2">
                  Sex
                </label>
                <Field type="sex" id="sex" name="sex" />
                <ErrorMessage name="sex" component={TextError} />
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12 d-flex flex-column">
                <label htmlFor="date" className="mb-2">
                  Date
                </label>
                <Field name="date">
                  {({ form, field }) => {
                    const { setFieldValue } = form;
                    const { value } = field;
                    return (
                      <DateView
                        id="date"
                        {...field}
                        selected={value}
                        onChange={(val) =>
                          setFieldValue("date", val)
                        }
                      />
                    );
                  }}
                </Field>
                <ErrorMessage name="date" component={TextError} />
              </div>
            </div>

            {/* Hematology */}
            <div className="mt-4 mb-2 fs-6 fw-bold">HEMATOLOGY</div>
            <div
              className="table-responsive mb-4 border ps-3 p-2"
              style={{ maxHeight: "478px", overflowY: "auto" }}
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
                    <th><button
                    className="btn btn-sm m-2 btn-primary"
                    type="button"
                    style={{minWidth:"76px"}}
                    onClick={() => {
                      setColumns(columns + 1);
                    }}
                  >
                    Add Date
                  </button></th>
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
                            className="w-50"
                            name={`rows[${index}].col${i + 1}`}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                  <input value={addRowLabel} onChange={onChangeHandler}></input>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <button
                    className="btn btn-sm m-2 btn-primary"
                    type="button"
                    disabled={disable}
                    onClick={() => {
                      setRows([
                        ...rows,
                        Array.from({ length: columns }).reduce(
                          (acc, _, i) => ({ ...acc, [`col${i + 1}`]: "" }),
                          {}
                        ),
                      ]);
                      setFieldValue("rows", [
                        ...rows,
                        Array.from({ length: columns }).reduce(
                          (acc, _, i) => ({ ...acc, [`col${i + 1}`]: "" }),
                          {}
                        ),
                      ]);
                      setRowLabel([...rowLabel, addRowLabel]);
                      setAddRowLabel("");
                      setDisability(true);
                    }}
                  >
                    Add Row
                  </button>
                </div>
              </div>
            </div>

            {/* Urine */}
            <div className="mt-4 mb-2 fs-6 fw-bold">URINE</div>
            <div
              className="table-responsive mb-4 border ps-3 p-2"
              style={{ maxHeight: "478px", overflowY: "auto" }}
            >
              <table>
                <thead>
                  <tr>
                    <th></th>
                    {Array.from({ length: columnsUrine }).map((_, i) => (
                      <th className=" p-2" key={i}>
                        Day {i + 1}
                      </th>
                    ))}
                    <th><button
                    className="btn btn-sm m-2 btn-primary"
                    type="button"
                    style={{minWidth:"76px"}}
                    onClick={() => {
                      setColumns(columns + 1);
                    }}
                  >
                    Add Date
                  </button></th>
                  </tr>
                </thead>
                <tbody>
                  {values.rowsUrine.map((row, index) => (
                    <tr key={index}>
                      <td className="fw-bold">{urineRowLabel[index]}</td>
                      {Array.from({ length: columnsUrine }).map((_, i) => (
                        <td key={i}>
                          <Field
                            as="textarea"
                            className="w-100"
                            name={`rowsUrine[${index}].col${i + 1}`}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                  <input
                    value={addUrineRowLabel}
                    onChange={onUrineLabelChangeHandler}
                  ></input>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <button
                    className="btn btn-sm m-2 btn-primary"
                    disabled={disableUrineAddRowBtn}
                    type="button"
                    onClick={() => {
                      setrowsUrine([
                        ...rowsUrine,
                        Array.from({ length: columnsUrine }).reduce(
                          (acc, _, i) => ({ ...acc, [`col${i + 1}`]: "" }),
                          {}
                        ),
                      ]);
                      setFieldValue("rowsUrine", [
                        ...rowsUrine,
                        Array.from({ length: columnsUrine }).reduce(
                          (acc, _, i) => ({ ...acc, [`col${i + 1}`]: "" }),
                          {}
                        ),
                      ]);
                      setUrineRowLabel([...urineRowLabel, addUrineRowLabel]);
                      setAddUrineRowLabel("");
                      setUrineAddRowBtnDisability(true);
                    }}
                  >
                    Add Row
                  </button>
                </div>
              </div>
            </div>

            {/* Blood Sugar */}
            <div className="mt-4 mb-2 fs-6 fw-bold">BLOOD SUGAR</div>
            <div
              className="table-responsive mb-4 border ps-3 p-2"
              style={{ maxHeight: "478px", overflowY: "auto" }}
            >
              <table>
                <thead>
                  <tr>
                    <th></th>
                    {Array.from({ length: columnsBloodSugar }).map((_, i) => (
                      <th className="text-center p-2" key={i}>
                        Day {i + 1}
                      </th>
                    ))}
                    <th><button
                    className="btn btn-sm m-2 btn-primary"
                    type="button"
                    style={{minWidth:"76px"}}
                    onClick={() => {
                      setColumns(columns + 1);
                    }}
                  >
                    Add Date
                  </button></th>
                  </tr>
                </thead>
                <tbody>
                  {values.rowsBloodSugar.map((row, index) => (
                    <tr key={index}>
                      <td className="fw-bold">{bloodSugarRowLabel[index]}</td>
                      {Array.from({ length: columnsBloodSugar }).map((_, i) => (
                        <td key={i}>
                          <Field
                            as="textarea"
                            className="w-100"
                            name={`rowsBloodSugar[${index}].col${i + 1}`}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                  <input
                    value={addBloodSugarRowLabel}
                    onChange={onBloodSugarLabelChangeHandler}
                  ></input>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <button
                    className="btn btn-sm m-2 btn-primary"
                    disabled={disableBloodSugarAddRowBtn}
                    type="button"
                    onClick={() => {
                      setrowsBloodSugar([
                        ...rowsBloodSugar,
                        Array.from({ length: columnsBloodSugar }).reduce(
                          (acc, _, i) => ({ ...acc, [`col${i + 1}`]: "" }),
                          {}
                        ),
                      ]);
                      setFieldValue("rowsBloodSugar", [
                        ...rowsBloodSugar,
                        Array.from({ length: columnsBloodSugar }).reduce(
                          (acc, _, i) => ({ ...acc, [`col${i + 1}`]: "" }),
                          {}
                        ),
                      ]);
                      setBloodSugarRowLabel([
                        ...bloodSugarRowLabel,
                        addBloodSugarRowLabel,
                      ]);
                      setAddBloodSugarLabel("");
                      setBloodSugarAddRowBtnDisability(true);
                    }}
                  >
                    Add Row
                  </button>
                </div>
              </div>
            </div>

            {/* Renal */}
            <div className="mt-4 mb-2 fs-6 fw-bold">RENAL</div>
            <div
              className="table-responsive mb-4 border ps-3 p-2"
              style={{ maxHeight: "478px", overflowY: "auto" }}
            >
              <table>
                <thead>
                  <tr>
                    <th></th>
                    {Array.from({ length: columnsRenal }).map((_, i) => (
                      <th className="text-center p-2" key={i}>
                        Day {i + 1}
                      </th>
                    ))}
                    <th><button
                    className="btn btn-sm m-2 btn-primary"
                    type="button"
                    style={{minWidth:"76px"}}
                    onClick={() => {
                      setColumns(columns + 1);
                    }}
                  >
                    Add Date
                  </button></th>
                  </tr>
                </thead>
                <tbody>
                  {values.rowsRenal.map((row, index) => (
                    <tr key={index}>
                      <td className="fw-bold">{renalRowLabel[index]}</td>
                      {Array.from({ length: columnsRenal }).map((_, i) => (
                        <td key={i}>
                          <Field
                            as="textarea"
                            className="w-100"
                            name={`rowsRenal[${index}].col${i + 1}`}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                  <input
                    value={addRenalRowLabel}
                    onChange={onRenalLabelChangeHandler}
                  ></input>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <button
                    className="btn btn-sm m-2 btn-primary"
                    disabled={disableRenalAddRowBtn}
                    type="button"
                    onClick={() => {
                      setrowsRenal([
                        ...rowsRenal,
                        Array.from({ length: columnsRenal }).reduce(
                          (acc, _, i) => ({ ...acc, [`col${i + 1}`]: "" }),
                          {}
                        ),
                      ]);
                      setFieldValue("rowsRenal", [
                        ...rowsRenal,
                        Array.from({ length: columnsRenal }).reduce(
                          (acc, _, i) => ({ ...acc, [`col${i + 1}`]: "" }),
                          {}
                        ),
                      ]);
                      setRenalRowLabel([...renalRowLabel, addRenalRowLabel]);
                      setAddBloodSugarLabel("");
                      setRenalAddRowBtnDisability(true);
                    }}
                  >
                    Add Row
                  </button>
                </div>
              </div>
            </div>

            {/* Heptic */}
            <div className="mt-4 mb-2 fs-6 fw-bold">HEPTIC</div>
            <div
              className="table-responsive mb-4 border ps-3 p-2"
              style={{ maxHeight: "478px", overflowY: "auto" }}
            >
              <table>
                <thead>
                  <tr>
                    <th></th>
                    {Array.from({ length: columnsHeptic }).map((_, i) => (
                      <th className="text-center p-2" key={i}>
                        Day {i + 1}
                      </th>
                    ))}
                    <th><button
                    className="btn btn-sm m-2 btn-primary"
                    type="button"
                    style={{minWidth:"76px"}}
                    onClick={() => {
                      setColumns(columns + 1);
                    }}
                  >
                    Add Date
                  </button></th>
                  </tr>
                </thead>
                <tbody>
                  {values.rowsHeptic.map((row, index) => (
                    <tr key={index}>
                      <td className="fw-bold">{hepticRowLabel[index]}</td>
                      {Array.from({ length: columnsHeptic }).map((_, i) => (
                        <td key={i}>
                          <Field
                            as="textarea"
                            className="w-100"
                            name={`rowsHeptic[${index}].col${i + 1}`}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                  <input
                    value={addHepticRowLabel}
                    onChange={onHepticLabelChangeHandler}
                  ></input>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <button
                    className="btn btn-sm m-2 btn-primary"
                    disabled={disableHepticAddRowBtn}
                    type="button"
                    onClick={() => {
                      setrowsHeptic([
                        ...rowsHeptic,
                        Array.from({ length: columnsHeptic }).reduce(
                          (acc, _, i) => ({ ...acc, [`col${i + 1}`]: "" }),
                          {}
                        ),
                      ]);
                      setFieldValue("rowsHeptic", [
                        ...rowsHeptic,
                        Array.from({ length: columnsHeptic }).reduce(
                          (acc, _, i) => ({ ...acc, [`col${i + 1}`]: "" }),
                          {}
                        ),
                      ]);
                      setHepticRowLabel([...hepticRowLabel, addHepticRowLabel]);
                      setAddBloodSugarLabel("");
                      setHepticAddRowBtnDisability(true);
                    }}
                  >
                    Add Row
                  </button>
                </div>
              </div>
            </div>

            {/* Cardiac */}
            <div className="mt-4 mb-2 fs-6 fw-bold">CARDIAC</div>
            <div
              className="table-responsive mb-4 border ps-3 p-2"
              style={{ maxHeight: "478px", overflowY: "auto" }}
            >
              <table>
                <thead>
                  <tr>
                    <th></th>
                    {Array.from({ length: columnsCardiac }).map((_, i) => (
                      <th className="text-center p-2" key={i}>
                        Day {i + 1}
                      </th>
                    ))}
                    <th><button
                    className="btn btn-sm m-2 btn-primary"
                    type="button"
                    style={{minWidth:"76px"}}
                    onClick={() => {
                      setColumns(columns + 1);
                    }}
                  >
                    Add Date
                  </button></th>
                  </tr>
                </thead>
                <tbody>
                  {values.rowsCardiac.map((row, index) => (
                    <tr key={index}>
                      <td className="fw-bold">{cardiacRowLabel[index]}</td>
                      {Array.from({ length: columnsCardiac }).map((_, i) => (
                        <td key={i}>
                          <Field
                            as="textarea"
                            className="w-100"
                            name={`rowsCardiac[${index}].col${i + 1}`}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                  <input
                    value={addCardiacRowLabel}
                    onChange={onCardiacLabelChangeHandler}
                  ></input>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <button
                    className="btn btn-sm m-2 btn-primary"
                    disabled={disableCardiacAddRowBtn}
                    type="button"
                    onClick={() => {
                      setrowsCardiac([
                        ...rowsCardiac,
                        Array.from({ length: columnsCardiac }).reduce(
                          (acc, _, i) => ({ ...acc, [`col${i + 1}`]: "" }),
                          {}
                        ),
                      ]);
                      setFieldValue("rowsCardiac", [
                        ...rowsCardiac,
                        Array.from({ length: columnsCardiac }).reduce(
                          (acc, _, i) => ({ ...acc, [`col${i + 1}`]: "" }),
                          {}
                        ),
                      ]);
                      setCardiacRowLabel([
                        ...cardiacRowLabel,
                        addCardiacRowLabel,
                      ]);
                      setAddBloodSugarLabel("");
                      setCardiacAddRowBtnDisability(true);
                    }}
                  >
                    Add Row
                  </button>
                </div>
              </div>
            </div>

            {/* Other */}
            <div className="mt-4 mb-2 fs-6 fw-bold">OTHER</div>
            <div
              className="table-responsive mb-4 border ps-3 p-2"
              style={{ maxHeight: "478px", overflowY: "auto" }}
            >
              <table>
                <thead>
                  <tr>
                    <th></th>
                    {Array.from({ length: columnsOther }).map((_, i) => (
                      <th className="text-center p-2" key={i}>
                        Day {i + 1}
                      </th>
                    ))}
                    <th><button
                    className="btn btn-sm m-2 btn-primary"
                    type="button"
                    style={{minWidth:"76px"}}
                    onClick={() => {
                      setColumns(columns + 1);
                    }}
                  >
                    Add Date
                  </button></th>
                  </tr>
                </thead>
                <tbody>
                  {values.rowsOther.map((row, index) => (
                    <tr key={index}>
                      <td className="fw-bold">{OtherRowLabel[index]}</td>
                      {Array.from({ length: columnsOther }).map((_, i) => (
                        <td key={i}>
                          <Field
                            as="textarea"
                            className="w-100"
                            name={`rowsOther[${index}].col${i + 1}`}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                  <input
                    value={addOtherRowLabel}
                    onChange={onOtherLabelChangeHandler}
                  ></input>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <button
                    className="btn btn-sm m-2 btn-primary"
                    disabled={disableOtherAddRowBtn}
                    type="button"
                    onClick={() => {
                      setrowsOther([
                        ...rowsOther,
                        Array.from({ length: columnsOther }).reduce(
                          (acc, _, i) => ({ ...acc, [`col${i + 1}`]: "" }),
                          {}
                        ),
                      ]);
                      setFieldValue("rowsOther", [
                        ...rowsOther,
                        Array.from({ length: columnsOther }).reduce(
                          (acc, _, i) => ({ ...acc, [`col${i + 1}`]: "" }),
                          {}
                        ),
                      ]);
                      setOtherRowLabel([...OtherRowLabel, addOtherRowLabel]);
                      setAddBloodSugarLabel("");
                      setOtherAddRowBtnDisability(true);
                    }}
                  >
                    Add Row
                  </button>
                </div>
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
      )}
    </Formik>
  );
};

export default InvestigationForm;
