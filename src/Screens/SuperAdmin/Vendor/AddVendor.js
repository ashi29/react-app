import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@mui/material";
import StepForm from "../../../Components/StepForm/Index";
import { MuiTextField } from "../../../MuiComponents/MuiTextField/Index";
import { MuiDropDown } from "../../../MuiComponents/MuiDropDown/Index";
import tickFrame from "../../../Images/ModalImages/tickFrame.png";
import CrossFrame from "../../../Images/ModalImages/CrossFrame.png";
import Layout from "../Layout";
import "../Client/Style.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAddVendorStep } from "../../../Store/Slice/stepSlice";
import SuccessErrorModal from "../../../Components/SuccesErrorModal/Index";
import MuiMultiSelectDropdown from "../../../MuiComponents/MuiMultiSelectDropdown/Index";

const AddVendor = () => {
  const navigate = useNavigate();
  const currentStep = useSelector(selectAddVendorStep);
  const [email, setEmail] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [address, setAddress] = useState("");
  const [successURL, setSuccessURL] = useState("");
  const [terminateURL, setTerminateURL] = useState("");
  const [quotafulURL, setQuotafulURL] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [alternateContactNumber, setAlternateContactNumber] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [panNo, setPanNo] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [bankBranchAddress, setBankBranchAddress] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [accountType, setAccountType] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [document, setDocument] = useState(null);
  const [countriesData, setCountriesData] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [status, setStatus] = useState("");
  const [userId, setUserId] = useState("");

  const vendorFormData = {
    userId: userId,
    accountType: "vendor",
    successURL: successURL,
    terminateURL: terminateURL,
    quotaFullURL: quotafulURL,
    securityTerminateURL: "not seding anything for now",
    registerationNumber: registrationNo,
    panNumber: panNo,
    bankBranchAddress: bankBranchAddress,
    accountNumber: accountNo,
    ifscCode: ifsc,
    accountType: "vendor",
    contactName: vendorName,
    contactEmail: email,
    alternateNumber: alternateContactNumber,
    website: "not for vendor",
    industry: "not for vendor",
    description: "not for vendor",
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeVendorName = (e) => {
    const selectedVendorName = e.target.value;
    setVendorName(selectedVendorName);
    const selectedVendor = vendorData.find(
      (Vendor) => Vendor.name === selectedVendorName
    );

    console.log("selectedVendor :>> ", selectedVendor);

    if (selectedVendor) {
      setUserId(selectedVendor.userId);
      setEmail(selectedVendor.email);
      setContactNumber(selectedVendor.number);
      setSelectedCountries(
        selectedVendor.country ? [selectedVendor.country] : []
      );
    }
  };

  const onChangeContactNumber = (e) => {
    setContactNumber(e.target.value);
  };

  const onChangeAlternateContactNumber = (e) => {
    setAlternateContactNumber(e.target.value);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const onChangeSuccessURL = (e) => {
    setSuccessURL(e.target.value);
  };

  const onChangeTerminateURL = (e) => {
    setTerminateURL(e.target.value);
  };

  const onChangeQuotafulURL = (e) => {
    setQuotafulURL(e.target.value);
  };

  const onChangeRegistrationNo = (e) => {
    setRegistrationNo(e.target.value);
  };

  const onChangePanNumber = (e) => {
    setPanNo(e.target.value);
  };

  const onChangeAccountNumber = (e) => {
    setAccountNo(e.target.value);
  };

  const onChangeBankBranchAddress = (e) => {
    setBankBranchAddress(e.target.value);
  };

  const onChangeIFSCCode = (e) => {
    setIfsc(e.target.value);
  };

  const onChangeAccountType = (e) => {
    setAccountType(e.target.value);
  };

  const onChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const onChangeCountry = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCountries(typeof value === "string" ? value.split(",") : value);
  };

  const onChangeDocument = (event) => {
    const file = event.target.files[0];
    setDocument(file);
  };

  const [vendorData, setVendorData] = useState([]);
  const [vendorUserName, setVendorUserName] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/ScrutinyGlobal/getUserList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accountType: ["vendor"],
        aprove: false,
      }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log("data of client : ", data);
        setVendorData(data);
        setVendorUserName(
          data.map((element) => {
            return element.name;
          })
        );
        console.log("vendor data seting ", vendorData);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/ScrutinyGlobal/getCountries", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCountriesData(
          data.map((element) => {
            return element.countryName;
          })
        );
      });
  }, []);

  const getHeading = () => {
    if (currentStep === 0 || currentStep === 1) {
      return "Vendor Details";
    } else if (currentStep === 2) {
      return "Redirect Links";
    } else if (currentStep === 3 || currentStep === 4) {
      return "Company & Bank Details";
    } else {
      return "";
    }
  };

  const steps = [
    [
      <Grid item>
        <MuiDropDown
          required={true}
          value={vendorName}
          defaultValue={vendorName || ""}
          onChange={onChangeVendorName}
          options={vendorUserName}
          label="Vendor Name"
          className="forAddClient"
        />
      </Grid>,
      <Grid item>
        <MuiTextField
          type="text"
          value={email}
          required={true}
          label="Email"
          // defaultValue={reduxData?.city || ""}
          onChange={onChangeEmail}
          className="forAddProject"
        />
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
              className="forAddProject"
            />
          </Grid>
          <Grid item md={6}>
            <MuiTextField
              type="text"
              value={alternateContactNumber}
              label="Alternate Contact Number"
              // defaultValue={reduxData?.state || ""}
              onChange={onChangeAlternateContactNumber}
              className="forAddProject"
            />
          </Grid>
        </Grid>
      </Grid>,
    ],
    [
      <Grid item>
        <MuiTextField
          type="text"
          value={address}
          label="Address"
          required={true}
          // defaultValue={reduxData?.city || ""}
          onChange={onChangeAddress}
          className="forAddProject"
        />
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
              className="forAddProject"
            />
          </Grid>
          <Grid item md={6}>
            <MuiTextField
              type="text"
              value={alternateContactNumber}
              label="Alternate Contact Number"
              // defaultValue={reduxData?.state || ""}
              onChange={onChangeAlternateContactNumber}
              className="forAddProject"
            />
          </Grid>
        </Grid>
      </Grid>,
      <Grid item>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <MuiMultiSelectDropdown
              label={"Country"}
              placeholder={"(Select more countries)"}
              value={selectedCountries}
              onChange={onChangeCountry}
              options={countriesData}
              className="forAddProject"
            />
          </Grid>
          <Grid item md={6}>
            <MuiDropDown
              value={status}
              //   defaultValue={reduxData?.accountType || ""}
              onChange={onChangeStatus}
              options={["Initiated", "Running", "Completed", "Cancelled"]}
              label="Status"
              className="forAddProject"
            />
          </Grid>
        </Grid>
      </Grid>,
    ],
    [
      <Grid item>
        <MuiTextField
          type="text"
          value={successURL}
          label="Success URL"
          required={true}
          onChange={onChangeSuccessURL}
          className="forAddProject"
        />
      </Grid>,
      <Grid item>
        <MuiTextField
          type="text"
          required={true}
          value={terminateURL}
          label="Terminate URL"
          onChange={onChangeTerminateURL}
          className="forAddProject"
        />
      </Grid>,
      <Grid item>
        <MuiTextField
          type="text"
          required={true}
          value={quotafulURL}
          label="Quotafull URL"
          onChange={onChangeQuotafulURL}
          className="forAddProject"
        />
      </Grid>,
    ],

    [
      <Grid item>
        <MuiTextField
          type="text"
          required={true}
          value={bankBranchAddress}
          label="Bank Branch Address"
          // defaultValue={reduxData?.city || ""}
          onChange={onChangeBankBranchAddress}
          className="forAddProject"
        />
      </Grid>,
      <Grid item>
        <MuiTextField
          type="text"
          required={true}
          value={accountNo}
          label="Account Number"
          // defaultValue={reduxData?.state || ""}
          onChange={onChangeAccountNumber}
          className="forAddProject"
        />
      </Grid>,
      <Grid item>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <MuiDropDown
              value={accountType}
              //   defaultValue={reduxData?.accountType || ""}
              onChange={onChangeAccountType}
              placeholder="Current"
              options={["Current", "Salary"]}
              label="Account Type"
              className="forAddProject"
            />
          </Grid>
          <Grid item md={6}>
            <MuiTextField
              type="text"
              value={ifsc}
              label="IFSC Code"
              // defaultValue={reduxData?.state || ""}
              onChange={onChangeIFSCCode}
              className="forAddProject"
            />
          </Grid>
        </Grid>
      </Grid>,
    ],
    [
      <Grid item>
        <MuiTextField
          type="text"
          required={true}
          value={registrationNo}
          label="Registration Number"
          onChange={onChangeRegistrationNo}
          className="forAddProject"
        />
      </Grid>,
      <Grid item>
        <MuiTextField
          type="text"
          required={true}
          value={panNo}
          label="PAN Number"
          onChange={onChangePanNumber}
          className="forAddProject"
        />
      </Grid>,
      <Grid item>
        <MuiTextField
          type="file"
          value={document}
          label="Document (if any)"
          onChange={onChangeDocument}
          className="forAddProject"
        />
      </Grid>,
    ],
  ];

  const handleSave = (formData) => {
    // Save form data
    fetch("http://localhost:8080/ScrutinyGlobal/setroletouser", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vendorFormData),
    });
    // setShowSuccessModal(true);

    setShowSuccessModal(!showSuccessModal);
    console.log("Form Data:", formData);
  };

  const handleClose = () => {
    setShowSuccessModal(!showSuccessModal);
  };

  const handleGoToVendors = () => {
    navigate("/vendors");
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
            Add Vendor
          </Paper>
        </Grid>
        <Grid item className="fixed-heading">
          {getHeading()}
        </Grid>
        <Grid item>
          <Paper elevation={2} className="form-sub-grid">
            <StepForm
              steps={steps}
              onSave={handleSave}
              formType={"add-vendor"}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid item>
        <SuccessErrorModal
          show={showSuccessModal}
          handleClose={handleClose}
          imageSrc={tickFrame}
          clientName={vendorName}
          isSuccess={true}
          text={"has been saved. You can view the details on Clients screen."}
          buttonPrimaryText="Ok"
          handleModalButtonClick={handleGoToVendors}
        />
        <SuccessErrorModal
          show={showErrorModal}
          handleClose={handleClose}
          imageSrc={CrossFrame}
          clientName={vendorName}
          isSuccess={false}
          text={"could not be saved due to some reason.Please try again"}
          buttonPrimaryText="Ok"
          handleModalButtonClick={handleGoToVendors}
        />
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="ADD VENDOR" />;
};

export default AddVendor;
