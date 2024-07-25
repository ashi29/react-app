import React, { useEffect, useState } from "react";
import { Grid, Paper, useMediaQuery } from "@mui/material";
import InvoiceImage from "./../../Images/Invoice/InvoiceImage.svg";
import "./Style.css";
import { MuiDropDown } from "../../MuiComponents/MuiDropDown/Index";
import { MuiTextField } from "../../MuiComponents/MuiTextField/Index";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";
import InvoiceModal from "../../Components/InvoiceModal/Index";
import Layout from "./Layout";
import { API_PREFIX } from "../../config";

const Invoice = () => {
  const [client, setClient] = useState("");
  const [project, setProject] = useState("");
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [date, setDate] = useState("");
  const [successfulSurveys, setSuccessfulSurveys] = useState("");
  const [costPerSurvey, setCostPerSurvey] = useState("");
  const [show, setShow] = useState(false);
  const [responseData, setResponseData] = useState(false);
  const [projectOptions, setProjectOptions] = useState([]);
  const [clientOptions, setClientOptions] = useState([]);

  const isMobile = useMediaQuery("(max-width:600px)");

  const onChangeClient = (e) => {
    const selectedClient = e.target.value;
    setClient(selectedClient);

    const clientData = responseData.find(
      (client) =>
        client.contact_name === selectedClient || client.name === selectedClient
    );
    if (clientData) {
      setCountry(clientData.country);
    }
  };
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

  useEffect(() => {
    getProjectData();
  }, []);

  function getProjectData() {
    fetch(`${API_PREFIX}getProjectList`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setResponseData(data);
        const projectNames = data.map((project) => project.project_name);
        const clientNames = data.map((client) => client.name);
        setProjectOptions(projectNames);
        setClientOptions(clientNames);
        // console.log("response Data", data);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }

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
                  value={project}
                  onChange={onChangeProject}
                  options={projectOptions}
                  label="Project"
                  className="forRegister"
                />
              </Grid>
              <Grid item xs={12} className="addPadding">
                <MuiDropDown
                  value={client}
                  onChange={onChangeClient}
                  options={clientOptions}
                  label="Client"
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
                {/* <Grid item>
                  <MuiContainedButton
                    buttonText="Generate PO"
                    onClickFunction={handleSubmit}
                    type="button"
                  />
                </Grid> */}
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
        ClientName={client}
        costPerSurvey={costPerSurvey}
        successfulSurveys={successfulSurveys}
      />
    </Grid>
  );

  return <Layout content={content} navbarHeading="SALES MODULE" />;
};

export default Invoice;
