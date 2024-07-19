import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { useNavigate } from "react-router-dom";
import MuiDataGrid from "../../../MuiComponents/MuiDataGrid/Index";
import { Button, Grid, Paper } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useDispatch } from "react-redux";
import { setSelectedRows } from "../../../Store/Slice/rowSelectionSlice";
import { rowsMetaStateInitializer } from "@mui/x-data-grid/internals";

const Projects = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const [checkedRows, setCheckedRows] = useState([]);
  const [responseData, setResponseData] = useState([]);
  const [surveyResponseData, setSurveyResponseData] = useState([]);
  const [projectDetailsData, setProjectDetailsData] = useState([]);

  let projectData = {
    id: [],
    status: [],
    projectName: [],
    clientName: [],
    projectHead: [],
    audienceType: [],
    country: [],
    billingCurrency: [],
    contactName: [],
    startDate: [],
    endDate: [],
    projectBudget: [],
    SPOC: [],
    IR: [],
    LOI: [],
  };

  const [columns, setColumns] = useState([
    {
      field: "id",
      headerName: "S.No.",
      width: 90,
      align: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      headerAlign: "center",
      editable: true,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      renderCell: (params) => {
        const getColor = (status) => {
          switch (status) {
            case "Completed":
              return "success";
            case "Cancelled":
              return "error";
            case "Initiated":
              return "primary";
            case "Running":
              return "warning";
            default:
              return "";
          }
        };
        return (
          <>
            <CircleIcon fontSize="small" color={getColor(params.value)} />

            <Paper elevation={0}>{params.value}</Paper>
          </>
        );
      },
    },
    {
      field: "projectName",
      headerName: "Project Name",
      align: "center",
      width: 180,
      headerAlign: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
    },
    {
      field: "clientName",
      headerName: "Client Name",
      width: 180,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "projectHead",
      headerName: "Project Head",
      width: 180,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "audienceType",
      headerName: "Audience Type",
      width: 170,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "country",
      headerName: "Country",
      width: 160,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "billingCurrency",
      headerName: "Billing Currency",
      width: 170,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "contactName",
      align: "center",
      headerName: "Contact Name",
      width: 160,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
    },
    {
      field: "startDate",
      headerName: "Start Date",
      align: "center",
      width: 170,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
    },
    {
      field: "endDate",
      headerName: "End Date",
      align: "center",
      width: 170,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
    },
    {
      field: "projectBudget",
      headerName: "Project Budget",
      align: "center",
      width: 170,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
    },
    {
      field: "SPOC",
      headerName: "Pre Sales SPOC",
      width: 170,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
      align: "center",
    },
  ]);

  useEffect(() => {
    getProjectData();
    getSurveyLinkData();
  }, []);

  function getSurveyLinkData() {
    fetch("http://localhost:8080/ScrutinyGlobal/getSurveyDetails", {
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
        setSurveyResponseData(data);
        console.log("response Data", data);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }

  function getProjectData() {
    fetch("http://localhost:8080/ScrutinyGlobal/getProjectList", {
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
        console.log("response Data", data);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    console.log("responseData", responseData);
    setProjectDetailsData(convertData(responseData));
  }, [responseData]);

  function convertData(projectdetailsData) {
    for (const key in projectData) {
      projectData[key] = [];
    }

    projectdetailsData.forEach((element) => {
      projectData.id.push(element.project_id);
      projectData.projectName.push(element.project_name);
      projectData.startDate.push(element.project_start_time);
      projectData.clientName.push(element.name);
      projectData.projectHead.push(element.project_head_id);
      projectData.audienceType.push(element.audience_type);
      projectData.country.push(element.country);
      projectData.billingCurrency.push(element.billing_currency);
      projectData.contactName.push(element.contact_name);
      projectData.endDate.push(element.project_end_time);
      projectData.projectBudget.push(element.project_minimum_fee);
      projectData.SPOC.push(element.pre_salespoc);
    });
    console.log(projectData);

    let projectDataConverted = [];
    const keys = Object.keys(projectData);
    const numObjects = projectData[keys[0]].length;
    for (let i = 0; i < numObjects; i++) {
      const newObj = {};
      keys.forEach((key) => {
        newObj[key] = projectData[key][i];
      });
      projectDataConverted.push(newObj);
    }

    return projectDataConverted;
  }

  const [columnVisibilityModel, setColumnVisibilityModel] = useState({
    id: false,
  });
  const rows = [
    {
      id: 1,
      status: "Completed",
      projectName: "Example Name",
      clientName: "Client/Org Name",
      projectHead: "projectHead",
      audienceType: "projectHead",
      country: "india",
      billingCurrency: "INR",
      contactName: "8595060044",
      startDate: "01-07-24",
      endDate: "01-07-24",
      projectBudget: "Rs 40,000",
      SPOC: "",
      // IR: "10",
      // LOI: "10",
    },
    {
      id: 2,
      status: "Running",
      projectName: "Example Name",
      clientName: "Client/Org Name",
      projectHead: "projectHead",
      audienceType: "projectHead",
      country: "india",
      billingCurrency: "INR",
      contactName: "8595060044",
      startDate: "01-07-24",
      endDate: "01-07-24",
      projectBudget: "Rs 40,000",
      SPOC: "",
      // IR: "10",
      // LOI: "10",
    },
    {
      id: 3,
      status: "Initiated",
      projectName: "Example Name",
      clientName: "Client/Org Name",
      projectHead: "projectHead",
      audienceType: "projectHead",
      country: "india",
      billingCurrency: "INR",
      contactName: "8595060044",
      startDate: "01-07-24",
      endDate: "01-07-24",
      projectBudget: "Rs 40,000",
      SPOC: "",
      // IR: "10",
      // LOI: "10",
    },
    {
      id: 4,
      status: "Cancelled",
      projectName: "Example Name",
      clientName: "Client/Org Name",
      projectHead: "projectHead",
      audienceType: "projectHead",
      country: "india",
      billingCurrency: "INR",
      contactName: "8595060044",
      startDate: "01-07-24",
      endDate: "01-07-24",
      projectBudget: "Rs 40,000",
      SPOC: "",
      // IR: "10",
      // LOI: "10",
    },
  ];

  const handleRowClick = (params) => {
    navigate(`/project/${checkedRows[0].id}`);
  };
  const handleRowSelection = (newRowSelectionModel) => {
    setRowSelectionModel(newRowSelectionModel);
    const selectedRowData = newRowSelectionModel.map((id) =>
      rows.find((row) => row.id === id)
    );
    setCheckedRows(selectedRowData);
    dispatch(setSelectedRows(selectedRowData));
  };

  const handleAssignVendor = () => {
    navigate(`/assignVendor/${checkedRows[0].id}`);
  };
  console.log("Selected Rows:", checkedRows);

  const content = (
    <Grid container>
      <Grid
        item
        container
        className="heading-grid2"
        justifyContent="space-between"
        alignItems="end"
      >
        <Grid item>
          <Paper elevation={0} className="screenHeading">
            PROJECT LIST
          </Paper>
        </Grid>
        <Grid item container justifyContent="flex-end" spacing={2} md={7}>
          <Grid item>
            <Button
              variant="outlined"
              color="error"
              onClick={handleAssignVendor}
              className="client-button add-class"
              disabled={checkedRows.length === 0}
              startIcon={
                <DescriptionOutlinedIcon color="success" fontSize="large" />
              }
            >
              Assign Vendor
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="error"
              onClick={handleRowClick}
              className="client-button export-class"
              disabled={checkedRows.length === 0}
              startIcon={
                <DescriptionOutlinedIcon color="primary" size="large" />
              }
            >
              View Details
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="error"
              disabled={checkedRows.length === 0}
              className="client-button delete-class"
              startIcon={<DeleteOutlinedIcon color="error" fontSize="large" />}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className="client-list-datagrid">
        <MuiDataGrid
          rows={projectDetailsData}
          getRowId={(row) => row.id}
          columns={columns}
          checkboxSelection={true}
          onRowSelectionModelChange={handleRowSelection}
          rowSelectionModel={rowSelectionModel}
          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={(newModel) =>
            setColumnVisibilityModel(newModel)
          }
        />
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="PROJECTS" />;
};

export default Projects;
