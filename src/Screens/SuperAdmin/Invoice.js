import React, { useState } from "react";
import { Grid, Paper, useMediaQuery } from "@mui/material";
import InvoiceImage from "./../../Images/Invoice/InvoiceImage.svg";
import "./Style.css";
import { MuiDropDown } from "../../MuiComponents/MuiDropDown/Index";
import { MuiTextField } from "../../MuiComponents/MuiTextField/Index";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";
import InvoiceModal from "../../Components/InvoiceModal/Index";
import Layout from "./Layout";

const Invoice = () => {
  const [vendor, setVendor] = useState("");
  const [project, setProject] = useState("");
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [date, setDate] = useState("");
  const [successfulSurveys, setSuccessfulSurveys] = useState("");
  const [costPerSurvey, setCostPerSurvey] = useState("");
  const [show, setShow] = useState(false);

  const isMobile = useMediaQuery("(max-width:600px)");

  const onChangeVendor = (e) => setVendor(e.target.value);
  const onChangeProject = (e) => setProject(e.target.value);
  const onChangeCountry = (e) => setCountry(e.target.value);
  const onChangeCurrency = (e) => setCurrency(e.target.value);
  const onChangeDate = (e) => setDate(e.target.value);
  const onChangeSuccessfulSurveys = (e) => setSuccessfulSurveys(e.target.value);
  const onChangeCostPerSurvey = (e) => setCostPerSurvey(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const content = (
    <Grid container className="dashboard-container">
      <Grid
        container
        className={isMobile ? "" : "sub-container"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} md={5}>
          <Paper elevation={isMobile ? 0 : 2} className="invoice-form">
            <form onSubmit={handleSubmit}>
              <Grid item xs={12} className="addPadding">
                <MuiDropDown
                  value={vendor}
                  onChange={onChangeVendor}
                  options={["client 1", "client 2", "client 3"]}
                  label="Vendor"
                  className="forRegister"
                />
              </Grid>
              <Grid item xs={12} className="addPadding">
                <MuiDropDown
                  value={project}
                  onChange={onChangeProject}
                  options={["project 1", "project 2", "project 3"]}
                  label="Project"
                  className="forRegister"
                />
              </Grid>
              <Grid item xs={12} className="addPadding">
                <MuiTextField
                  type="date"
                  value={date}
                  label="Select Date"
                  placeholder="01-02-2001"
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
              <Grid
                container
                justifyContent="space-evenly"
                alignItems="center"
                className="addPadding"
              >
                <Grid item>
                  <MuiContainedButton
                    buttonText="Generate Invoice"
                    type="submit"
                  />
                </Grid>
                <Grid item>
                  <MuiContainedButton
                    buttonText="Generate PO"
                    onClickFunction={handleSubmit}
                    type="button"
                  />
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        {!isMobile && (
          <Grid item md={6}>
            <img src={InvoiceImage} alt="invoice" className="invoiceImage" />
          </Grid>
        )}
      </Grid>
      <InvoiceModal
        show={show}
        handleClose={handleClose}
        ClientName={vendor}
        costPerSurvey={costPerSurvey}
        successfulSurveys={successfulSurveys}
      />
    </Grid>
  );

  return <Layout content={content} navbarHeading="SALES MODULE" />;
};

export default Invoice;
