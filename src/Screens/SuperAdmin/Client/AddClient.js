import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@mui/material";
import StepForm from "../../../Components/StepForm/Index";
import { MuiTextField } from "../../../MuiComponents/MuiTextField/Index";
import { MuiDropDown } from "../../../MuiComponents/MuiDropDown/Index";
import Layout from "../Layout";
import tickFrame from "../../../Images/ModalImages/tickFrame.png";
import CrossFrame from "../../../Images/ModalImages/CrossFrame.png";
import "./Style.css";
import { useNavigate } from "react-router-dom";
import SuccessErrorModal from "../../../Components/SuccesErrorModal/Index";

const AddClient = () => {
  const navigate = useNavigate();
  const [clientName, setClientName] = useState("");
  const [contactName, setContactName] = useState("");
  const [alternateContactName, setAlternateContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [alternateContactNumber, setAlternateContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [status, setStatus] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [userId, setUserId] = useState("");
  const [accountType, setAccountType] = useState("");
  const [industry, setIndustry] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeContactName = (e) => {
    setContactName(e.target.value);
  };

  const onChangeAlternateContactName = (e) => {
    setAlternateContactName(e.target.value);
  };

  const onChangeContactNumber = (e) => {
    setContactNumber(e.target.value);
  };

  const onChangeAlternateContactNumber = (e) => {
    setAlternateContactNumber(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeWebsiteLink = (e) => {
    setWebsiteLink(e.target.value);
  };

  const onChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const onChangeCurrency = (e) => {
    setCurrency(e.target.value);
  };

  const onChangeIndustry = (e) => {
    setIndustry(e.target.value);
  };

  const [clientData, setClientData] = useState([]);
  const [clientUserName, setClientUserName] = useState([]);

  useEffect(() => {
    fetch("http://ec2-13-239-62-154.ap-southeast-2.compute.amazonaws.com:8080/ScrutinyGlobal/getUserList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accountType: ["client"],
        aprove: false,
      }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log("data of client : ", data);
        setClientData(data);
        setClientUserName(
          data.map((element) => {
            return element.name;
          })
        );
        console.log("client data seting ", clientData);
      });
  }, []);

  const onChangeClientName = (e) => {
    const selectedClientName = e.target.value;
    setClientName(selectedClientName);
    const selectedClient = clientData.find(
      (client) => client.name === selectedClientName
    );

    if (selectedClient) {
      setUserId(selectedClient.userId);
      setClientName(selectedClientName);
      // setContactName(selectedClient.name);
      setContactNumber(selectedClient.number);
      setEmail(selectedClient.email);
      setAddress(selectedClient.address);
      setCountry(selectedClient.country);
      setAccountType(selectedClient.accountType);
    }
  };

  const clientFormData = 
    {
      "userId": userId,
      "accountType": "client",
      "successURL": "",
      "terminateURL": "",
      "quotaFullURL": "",
      "securityTerminateURL": "",
      "contactName": contactName,
      "contactEmail": email,
      "alternateNumber": alternateContactNumber,
      "website": websiteLink,
      "industry": industry,
      "description": "",
    };
  //setClientFormData
  // console.log('object :>> ', object);
  console.log("client data seting outside", clientUserName);

  const steps = [
    [
      <Grid item>
        <MuiDropDown
          required={true}
          value={clientData.name}
          defaultValue={clientName || ""}
          onChange={onChangeClientName}
          options={clientUserName}
          label="Client Name"
          className="forAddClient"
        />
      </Grid>,
      <Grid item>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <MuiTextField
              type="text"
              required={true}
              value={contactName}
              label="Contact Name"
              // defaultValue={reduxData?.city || ""}
              onChange={onChangeContactName}
              className="forAddClient"
            />
          </Grid>
          <Grid item md={6}>
            <MuiTextField
              type="text"
              value={alternateContactName}
              label="Alternate Contact Name"
              // defaultValue={reduxData?.state || ""}
              onChange={onChangeAlternateContactName}
              className="forAddClient"
            />
          </Grid>
        </Grid>
      </Grid>,
      <Grid item>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <MuiTextField
              type="text"
              required={true}
              value={contactNumber}
              label="Contact Number"
              // defaultValue={reduxData?.city || ""}
              onChange={onChangeContactNumber}
              className="forAddClient"
            />
          </Grid>
          <Grid item md={6}>
            <MuiTextField
              type="text"
              value={alternateContactNumber}
              label="Alternate Contact Number"
              // defaultValue={reduxData?.state || ""}
              onChange={onChangeAlternateContactNumber}
              className="forAddClient"
            />
          </Grid>
        </Grid>
      </Grid>,
    ],
    [
      <Grid item>
        <MuiTextField
          type="text"
          value={email}
          required={true}
          label="Email"
          onChange={onChangeEmail}
          className="forAddClient"
        />
      </Grid>,
      <Grid item>
        <MuiTextField
          type="text"
          value={websiteLink}
          required={true}
          label="Website Link"
          onChange={onChangeWebsiteLink}
          className="forAddClient"
        />
      </Grid>,
      <Grid item>
        <MuiDropDown
          value={status}
          //   defaultValue={reduxData?.accountType || ""}
          onChange={onChangeStatus}
          options={["Active", "Inactive"]}
          label="Status"
          className="forAddClient"
        />
      </Grid>,
    ],
    [
      <Grid item>
        <MuiTextField
          type="text"
          value={address}
          required={true}
          label="Address"
          onChange={onChangeAddress}
          className="forAddClient"
        />
      </Grid>,
      <Grid item>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <MuiTextField
              type="text"
              required={true}
              value={country}
              label="Country"
              // defaultValue={reduxData?.city || ""}
              onChange={onChangeCountry}
              className="forAddClient"
            />
          </Grid>
          <Grid item md={6}>
            <MuiTextField
              type="text"
              value={currency}
              label="Currency"
              // defaultValue={reduxData?.state || ""}
              onChange={onChangeCurrency}
              className="forAddClient"
            />
          </Grid>
        </Grid>
      </Grid>,
      <Grid item>
        <MuiDropDown
          value={industry}
          required={true}
          //   defaultValue={reduxData?.accountType || ""}
          onChange={onChangeIndustry}
          options={["industry 1", "industry 2", "industry 3"]}
          label="Industry"
          className="forAddClient"
        />
      </Grid>,
    ],
  ];

  const handleSave = (formData) => {

    

    fetch("http://ec2-13-239-62-154.ap-southeast-2.compute.amazonaws.com:8080/ScrutinyGlobal/setroletouser", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clientFormData),
    });
    setShowSuccessModal(true);
  };

  const handleClose = () => {
    setShowSuccessModal(false);
  };

  const handleGoToClientList = () => {
    navigate("/clients");
  };

  const content = (
    <Grid container alignItems="center" justifyContent="center">
      <Grid
        item
        container
        md={7}
        className="form-grid"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className="heading-grid">
          <Paper elevation={0} className="screenHeading">
            Add a New Client
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={6} className="form-sub-grid">
            <StepForm
              steps={steps}
              onSave={handleSave}
              formType={"add-client"}
            />
          </Paper>
        </Grid>
        <Grid item>
          <SuccessErrorModal
            show={showSuccessModal}
            handleClose={handleClose}
            imageSrc={tickFrame}
            clientName={clientName}
            isSuccess={true}
            text={"has been saved. You can view the details on Clients screen."}
            buttonPrimaryText="Ok"
            handleModalButtonClick={handleGoToClientList}
          />
          <SuccessErrorModal
            show={showErrorModal}
            handleClose={handleClose}
            imageSrc={CrossFrame}
            clientName={clientName}
            isSuccess={false}
            text={"could not be saved due to some reason.Please try again"}
            buttonPrimaryText="Ok"
            handleModalButtonClick={handleGoToClientList}
          />
        </Grid>
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="ADD CLIENT" />;
};

export default AddClient;
