import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import InvoiceImage from "./../../Images/Invoice/InvoiceImage.svg";
import "./Style.css";
import { MuiDropDown } from "../../MuiComponents/MuiDropDown/Index";
import { MuiTextField } from "../../MuiComponents/MuiTextField/Index";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";
import InvoiceModal from "../../Components/InvoiceModal/Index";
import Layout from "./Layout";

const Invoice = () => {
  const [client, setClient] = useState("");
  const [project, setProject] = useState("");
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [date, setDate] = useState("");
  const [totalNoofSurveys, setTotalNoofSurveys] = useState("");
  const [successfulSurveys, setSuccessfulSurveys] = useState("");
  const [costPerSurvey, setCostPerSurvey] = useState("");
  const [show, setShow] = useState(false);

  const onChangeClient = (e) => {
    setClient(e.target.value);
  };
  const onChangeProject = (e) => {
    setProject(e.target.value);
  };
  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeCurrency = (e) => {
    setCurrency(e.target.value);
  };
  const onChangeDate = (e) => {
    setDate(e.target.value);
  };
  // const onChangeTotalNoofSurveys = (e) => {
  //   setTotalNoofSurveys(e.target.value);
  // };
  const onChangeSuccessfulSurveys = (e) => {
    setSuccessfulSurveys(e.target.value);
  };
  const onChangeCostPerSurvey = (e) => {
    setCostPerSurvey(e.target.value);
  };

  const handleSubmit = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const content = (
    <>
      <Grid container className="dashboard-container">
        <Grid
          className="sub-container"
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} md={5}>
            <Paper elevation={2} className="invoice-form">
              <form onSubmit={handleSubmit}>
                <Grid item xs={12} className="addPadding">
                  <MuiDropDown
                    value={client}
                    onChange={onChangeClient}
                    options={["client 1", "client 2", "client 3"]} // Example options
                    label="Client"
                    className="forRegister"
                  />
                </Grid>
                <Grid item xs={12} className="addPadding">
                  <MuiDropDown
                    value={project}
                    onChange={onChangeProject}
                    options={["project 1", "project 2", "project 3"]} // Example options
                    label="Project"
                    className="forRegister"
                  />
                </Grid>
                <Grid item xs={12} className="addPadding">
                  <MuiTextField
                    type="date"
                    value={date}
                    label="Select Date"
                    placeholder={"01-02-2001"}
                    onChange={onChangeDate}
                    className="forRegister"
                  />
                </Grid>
                <Grid container spacing={3} className="addPadding">
                  <Grid item xs={12} md={6}>
                    <MuiTextField
                      type="text"
                      value={country}
                      label="Country"
                      onChange={onChangeCountry}
                      className="forRegister"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MuiTextField
                      type="text"
                      value={currency}
                      label="Currency"
                      onChange={onChangeCurrency}
                      className="forRegister"
                    />
                    {/* <MuiDropDown
                      value={currency}
                      onChange={onChangeCurrency}
                      options={["currency 1", "currency 2", "currency 3"]} // Example options
                      label="Currency"
                      className="forRegister"
                    /> */}
                  </Grid>
                </Grid>
                <Grid container spacing={3} className="addPadding">
                  <Grid item xs={12} md={6}>
                    <MuiTextField
                      name="successfulSurveys"
                      type="text"
                      value={successfulSurveys}
                      label="Successful Surveys"
                      onChange={onChangeSuccessfulSurveys}
                      className="forRegister"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MuiTextField
                      name="costPerSurvey"
                      type="text"
                      value={costPerSurvey}
                      label="Cost/Survey"
                      placeholder="Ex: Rs 40"
                      onChange={onChangeCostPerSurvey}
                      className="forRegister"
                    />
                  </Grid>
                </Grid>
              </form>
              <Grid
                container
                justifyContent="space-evenly"
                alignItems="center"
                className="addPadding"
              >
                <Grid item>
                  <MuiContainedButton
                    buttonText={"Generate Invoice"}
                    onClickFunction={handleSubmit}
                    type="submit"
                  />
                </Grid>
                <Grid item>
                  <MuiContainedButton
                    buttonText={"Generate PO"}
                    onClickFunction={handleSubmit}
                    type="button"
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={InvoiceImage} alt="invoice" className="invoiceImage" />
          </Grid>
        </Grid>
      </Grid>
      <InvoiceModal
        show={show}
        handleClose={handleClose}
        ClientName={client}
        costPerSurvey={costPerSurvey}
        successfulSurveys={successfulSurveys}
        totalNoofSurveys={totalNoofSurveys}
      />
    </>
  );

  return <Layout content={content} navbarHeading="SALES MODULE" />;
};

export default Invoice;
