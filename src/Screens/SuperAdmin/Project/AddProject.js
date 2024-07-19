import React, { useEffect, useState } from "react";
import { Grid, IconButton, Paper, TextField } from "@mui/material";
import StepForm from "../../../Components/StepForm/Index";
import { MuiTextField } from "../../../MuiComponents/MuiTextField/Index";
import { MuiDropDown } from "../../../MuiComponents/MuiDropDown/Index";
import Layout from "../Layout";
import "../Client/Style.css";
import tickFrame from "../../../Images/ModalImages/tickFrame.png";
import CrossFrame from "../../../Images/ModalImages/CrossFrame.png";
import "./Style.css";
import { Add as AddIcon } from "@mui/icons-material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import MuiDataGrid from "../../../MuiComponents/MuiDataGrid/Index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAddProjectStep } from "../../../Store/Slice/stepSlice";
import SuccessErrorModal from "../../../Components/SuccesErrorModal/Index";
import { selectedRow } from "../../../Store/Slice/rowSelectionSlice";
import MuiMultiSelectDropdown from "../../../MuiComponents/MuiMultiSelectDropdown/Index";
// import EditIcon from "@mui/icons-material/Edit";

const AddProject = () => {
  const clientData = useSelector(selectedRow);
  const navigate = useNavigate();
  const currentStep = useSelector(selectAddProjectStep);
  // const [edit, setEdit] = useState(false);
  const [clientName, setClientName] = useState(clientData[0]?.clientName || "");
  const [projectName, setProjectName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [contactNumber, setContactNumber] = useState(
    clientData[0]?.contactNumber || ""
  );
  const [alternateContactNumber, setAlternateContactNumber] = useState("");
  const [audienceType, setAudienceType] = useState("");
  const [projectHead, setProjectHead] = useState("");
  const [projectBudget, setProjectBudget] = useState("");
  const [description, setDescription] = useState("");
  const [spoc, setSpoc] = useState("");
  const [billingCurrency, setBillingCurrency] = useState("");
  const [document, setDocument] = useState(null);
  const [countriesData, setCountriesData] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState(
    clientData[0]?.country ? [clientData[0].country] : []
  );
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  // console.log("edit :>> ", edit);

  // const handleEdit = () => {
  //   setEdit(true);
  // };

  const onChangeClientName = (e) => {
    setClientName(e.target.value);
  };

  const onChangeProjectName = (e) => {
    setProjectName(e.target.value);
  };

  const onChangeContactNumber = (e) => {
    setContactNumber(e.target.value);
  };

  const onChangeAlternateContactNumber = (e) => {
    setAlternateContactNumber(e.target.value);
  };

  const onChangeStartDate = (e) => {
    setStartDate(e.target.value);
  };

  const onChangeEndDate = (e) => {
    setEndDate(e.target.value);
  };

  const onChangeProjectHead = (e) => {
    setProjectHead(e.target.value);
  };

  const onChangeAudienceType = (e) => {
    setAudienceType(e.target.value);
  };

  const onChangeProjectBudget = (e) => {
    setProjectBudget(e.target.value);
  };

  const onChangeSPOC = (e) => {
    setSpoc(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeBillingCurrency = (e) => {
    setBillingCurrency(e.target.value);
  };

  const onChangeCountry = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCountries(typeof value === "string" ? value.split(",") : value);
  };

  const onChangeDocument = (event) => {
    const file = event.target.files[0];
    console.log("file :>> ", file);
    setDocument(file);
  };
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({
    id: false,
  });

  const handleEditChange = (id, field, value) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const [columns, setColumns] = useState([
    { field: "id", headerClassName: "add-project-header" },
    {
      field: "country",
      headerName: "Country",
      cellClassName: "dataGrid-cell",
      width: 100,
      align: "center",
      headerAlign: "center",
      headerClassName: "add-project-header",
    },
    {
      field: "IR",
      headerName: "IR%",
      width: 70,
      align: "center",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
      headerClassName: "add-project-header",
      renderCell: (params) => (
        <TextField
          size="small"
          value={params.value}
          variant="standard"
          onChange={(e) =>
            handleEditChange(params.id, params.field, e.target.value)
          }
        />
      ),
    },
    {
      field: "LOI",
      headerName: "LOI(min)",
      type: "number",
      width: 80,
      align: "center",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
      headerClassName: "add-project-header",
      renderCell: (params) => (
        <TextField
          size="small"
          value={params.value}
          variant="standard"
          onChange={(e) =>
            handleEditChange(params.id, params.field, e.target.value)
          }
        />
      ),
    },
    {
      field: "completesNeeded",
      headerName: "Completes needed",
      width: 150,
      align: "center",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
      headerClassName: "add-project-header",
      renderCell: (params) => (
        <TextField
          size="small"
          value={params.value}
          variant="standard"
          onChange={(e) =>
            handleEditChange(params.id, params.field, e.target.value)
          }
        />
      ),
    },
    {
      field: "completesFeasable",
      headerName: "Completes Feasable",
      width: 150,
      align: "center",
      headerAlign: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "add-project-header",
      renderCell: (params) => (
        <TextField
          size="small"
          value={params.value}
          variant="standard"
          onChange={(e) =>
            handleEditChange(params.id, params.field, e.target.value)
          }
        />
      ),
    },
    {
      field: "costPerSurvey",
      headerName: "Cost/Survey",
      width: 120,
      headerAlign: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "add-project-header",
      renderCell: (params) => (
        <TextField
          size="small"
          value={params.value}
          variant="standard"
          onChange={(e) =>
            handleEditChange(params.id, params.field, e.target.value)
          }
        />
      ),
    },
    {
      field: "surveyLink",
      headerName: "Survey Link",
      width: 150,
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
      headerClassName: "add-project-header",
      renderCell: (params) => (
        <TextField
          size="small"
          value={params.value}
          variant="standard"
          onChange={(e) =>
            handleEditChange(params.id, params.field, e.target.value)
          }
        />
      ),
    },
  ]);

  const [rows, setRows] = useState(
    selectedCountries.map((country, index) => ({
      id: (index + 1).toString(),
      country,
      IR: "",
      LOI: "",
      completesNeeded: "",
      completesFeasable: "",
      costPerSurvey: "",
      surveyLink: "",
    }))
  );

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

  useEffect(() => {
    setRows(
      selectedCountries.map((country, index) => ({
        id: (index + 1).toString(),
        country,
        IR: "",
        LOI: "",
        completesNeeded: "",
        completesFeasable: "",
        costPerSurvey: "",
        surveyLink: "",
      }))
    );
  }, [selectedCountries]);

  const handleDeleteRows = () => {
    const newRows = rows.filter((row) => !selectedRowIds.includes(row.id));
    setRows(newRows);
    setSelectedRowIds([]);
  };
  console.log("selectedRowIds :>> ", selectedRowIds);

  const steps = [
    [
      <Grid item>
        <MuiTextField
          type="text"
          value={projectName}
          label="Project Name"
          // defaultValue={reduxData?.city || ""}
          onChange={onChangeProjectName}
          className="forAddProject"
        />
      </Grid>,
      <Grid item>
        <MuiTextField
          type="text"
          value={clientName}
          label="Client Name"
          // defaultValue={reduxData?.city || ""}
          onChange={onChangeClientName}
          className="forAddProject"
        />
      </Grid>,
      <Grid item>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item md={5}>
            <MuiTextField
              type="text"
              value={contactNumber}
              label="Contact Number"
              // defaultValue={reduxData?.city || ""}
              onChange={onChangeContactNumber}
              className="forAddProject"
            />
          </Grid>
          <Grid item md={5}>
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
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item md={5}>
            <MuiTextField
              type="date"
              value={startDate}
              label="Start Date"
              // defaultValue={reduxData?.city || ""}
              onChange={onChangeStartDate}
              placeholder="01-07-2024"
              className="forAddProject"
            />
          </Grid>
          <Grid item md={5}>
            <MuiTextField
              type="date"
              value={endDate}
              label="End Date"
              // defaultValue={reduxData?.city || ""}
              onChange={onChangeEndDate}
              placeholder="01-07-2024"
              className="forAddProject"
            />
          </Grid>
        </Grid>
      </Grid>,

      <Grid item>
        <MuiTextField
          type="text"
          value={projectHead}
          label="Project Head"
          onChange={onChangeProjectHead}
          className="forAddProject"
        />
      </Grid>,
      <Grid item>
        <MuiTextField
          type="text"
          value={spoc}
          label="Pre Sales SPOC"
          // defaultValue={reduxData?.state || ""}
          onChange={onChangeSPOC}
          className="forAddProject"
        />
      </Grid>,
    ],
    [
      <Grid item>
        <MuiDropDown
          value={audienceType}
          //   defaultValue={reduxData?.accountType || ""}
          onChange={onChangeAudienceType}
          placeholder="College Students"
          options={["College Students", "audienceType 2", "audienceType 3"]}
          label="Audience Type"
          className="forAddProject"
        />
      </Grid>,
      <Grid item>
        <MuiTextField
          type="text"
          value={projectBudget}
          label="Project Budget"
          placeholder="Ex 40,000"
          onChange={onChangeProjectBudget}
          className="forAddProject"
        />
      </Grid>,
      <Grid item>
        <MuiTextField
          type="text"
          value={description}
          label="Description"
          onChange={onChangeDescription}
          className="forAddProject"
        />
      </Grid>,
    ],
    [
      <Grid item>
        <MuiDropDown
          value={billingCurrency}
          //   defaultValue={reduxData?.accountType || ""}
          onChange={onChangeBillingCurrency}
          placeholder="USD"
          options={["USD", "INR", "EURO"]}
          label="Billing Currency"
          className="forAddProject"
        />
      </Grid>,
      <Grid item>
        <MuiMultiSelectDropdown
          label={"Country"}
          placeholder={"(Select more countries)"}
          value={selectedCountries}
          onChange={onChangeCountry}
          options={countriesData}
          className="forAddProject"
        />
      </Grid>,
      <Grid item>
        <MuiTextField
          type="file"
          value={document}
          label="Document(id any)"
          placeholder=""
          onChange={onChangeDocument}
          className="forAddProject"
        />
      </Grid>,
    ],
    [
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item container alignItems="center" xs={12}>
          <Grid item md={10}>
            <Paper elevation={0} className="datagrid-label">
              Based on your country selection:
            </Paper>
          </Grid>
          <Grid
            item
            container
            md={2}
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid item>
              <IconButton>
                <AddIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={handleDeleteRows}>
                <DeleteOutlinedIcon color="error" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className="add-client-datagrid">
          <MuiDataGrid
            rows={rows}
            columns={columns}
            checkboxSelection={true}
            disablePagination={true}
            columnVisibilityModel={columnVisibilityModel}
            onRowSelectionModelChange={(newSelection) => {
              console.log("Hi");
              setSelectedRowIds(newSelection);
            }}
          />
        </Grid>
      </Grid>,
    ],
  ];

  const handleSave = (formData) => {
    // Save form data
    setShowSuccessModal(!showSuccessModal);
    console.log("Form Data:", formData);
  };

  const handleClose = () => {
    setShowSuccessModal(!showSuccessModal);
  };

  const handleGoToProjectList = () => {
    navigate("/projects");
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
            Add Project
          </Paper>
        </Grid>
        <Grid item container className="content-grid">
          <Grid item className="fixed-heading">
            {currentStep > 2
              ? "Sampling Requirements"
              : "Project Specifications"}
          </Grid>
          <Paper elevation={2} className="form-sub-grid">
            <StepForm
              steps={steps}
              onSave={handleSave}
              formType={"add-project"}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid item>
        <SuccessErrorModal
          show={showSuccessModal}
          handleClose={handleClose}
          imageSrc={tickFrame}
          clientName={projectName}
          isSuccess={true}
          text={"has been saved. You can view the details on Projects screen."}
          buttonPrimaryText="Ok"
          handleModalButtonClick={handleGoToProjectList}
        />
        <SuccessErrorModal
          show={showErrorModal}
          handleClose={handleClose}
          imageSrc={CrossFrame}
          clientName={projectName}
          isSuccess={false}
          text={"could not be saved due to some reason.Please try again"}
          buttonPrimaryText="Ok"
          handleModalButtonClick={handleGoToProjectList}
        />
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="ADD PROJECT" />;
};

export default AddProject;
