import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import { Button, Grid, Typography, TextField } from "@mui/material";
import tickFrame from "../../../Images/ModalImages/tickFrame.png";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MuiMultiSelectDropdown from "../../../MuiComponents/MuiMultiSelectDropdown/Index";
import MuiDataGrid from "../../../MuiComponents/MuiDataGrid/Index";
import SuccessErrorModal from "../../../Components/SuccesErrorModal/Index";
import { useNavigate } from "react-router-dom";
import { API_PREFIX } from "../../../config";

const AssignVendor = () => {
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [vendorId, setVendorId] = useState(0);
  const [vendorName, setVendorName] = useState("");
  const [successURL, setSuccessURL] = useState("");
  const [terminateURL, setTerminateURL] = useState("");
  const [quotaFullURL, setQuotafulURL] = useState("");
  const [costPerSurvey, setCostPerSurvey] = useState("");
  const [projectId,setProjectId] = useState("");
  const [responseData, setResponseData] = useState([]);
  const [userDataNew, setUserDataNew] = useState([]);
  const navigate = useNavigate();

  const saveVendorDetais = [
    {
      projectId : projectId,

    }
  ]

  const vendorGridData = {
    id: [],
    vendorName: [],
    successURL: [],
    terminateURL: [],
    quotafullURL: [],
    costPerSurvey: [],
  };

  useEffect(() => {
    getVendorData();
  }, []);

  function getVendorData() {
    fetch(`${API_PREFIX}getListAsAccountType?accountType=vendor`, {
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
        // console.log("response Data", data);
        
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    setUserDataNew(convertData(responseData));
  }, [responseData]);
  function convertData(data) {
    // console.log(data);
    data.map((element) => vendorGridData.id.push(element.user_id));
    data.map((element) => vendorGridData.vendorName.push(element.name));
    data.map((element) => vendorGridData.successURL.push(element.successurl));
    data.map((element) =>
      vendorGridData.terminateURL.push(element.terminateurl)
    );
    data.map((element) =>
      vendorGridData.quotafullURL.push(element.quota_fullurl)
    );

    let userDataConverted = [];
    const keys = Object.keys(vendorGridData);
    const numObjects = vendorGridData[keys[0]].length;
    for (let i = 0; i < numObjects; i++) {
      const newObj = {};
      keys.forEach((key) => {
        newObj[key] = vendorGridData[key][i];
      });
      userDataConverted = [...userDataConverted, newObj];
    }
    console.log("testing",userDataNew);
    
    return userDataConverted;
  }

  console.log("testing outside",userDataNew);
  

  const handleVendorChange = (event) => {
    const {
      target: { value },
    } = event;

    const selectedVendorNames =
      typeof value === "string" ? value.split(",") : value;
    const updatedSelectedVendors = selectedVendorNames.map((vendorName) =>
      userDataNew.find((vendor) => vendor.vendorName === vendorName)
    );
    // const selectedVendorList = userDataNew.map((vendor) => vendor.vendorName === value);

    setSelectedVendors(updatedSelectedVendors);
    setSelectedRowIds([]);
    console.log("testing selectedVendors",selectedVendors);
  };

  const handleEditChange = (id, field, value) => {
    setSelectedVendors((prevVendors) =>
      prevVendors.map((vendor) =>
        vendor.id === id ? { ...vendor, [field]: value } : vendor
      )
    );
  };

  const handleDelete = () => {
    const remainingVendors = selectedVendors.filter(
      (vendor) => !selectedRowIds.includes(vendor.id)
    );
    setSelectedVendors(remainingVendors);
    setSelectedRowIds([]);
  };

  const handleSave = () => {
    fetch(`${API_PREFIX}saveVenderDetails`, {
      // mode: 'no-cors',
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedVendors),
    });
    setShowSuccessModal(true);
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleModalButtonClick = () => {
    navigate("/projects");
  };

  const handleClose = () => {
    setShowSuccessModal(false);
  };

  const columns = [
    {
      field: "id",
      headerName: "S.No.",
      width: 95,
      editable: false,
      align: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
    },
    {
      field: "link",
      headerName: "Copy Link",
      width: 100,
      editable: false,
      align: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      renderCell: (params) => (
        <DescriptionOutlinedIcon
          color="primary"
          style={{ cursor: "pointer" }}
        />
      ),
    },
    {
      field: "vendorName",
      headerName: "Vendor Name",
      width: 180,
      editable: false,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "successURL",
      headerName: "Success URL",
      width: 190,
      editable: false,
      align: "left",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
      renderCell: (params) =>
        edit ? (
          <TextField
            value={params.value}
            variant="standard"
            onChange={(e) =>
              handleEditChange(params.id, params.field, e.target.value)
            }
          />
        ) : (
          params.value
        ),
    },
    {
      field: "quotafullURL",
      headerName: "Quotafull URL",
      width: 190,
      align: "left",
      editable: false,
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
      renderCell: (params) =>
        edit ? (
          <TextField
            value={params.value}
            variant="standard"
            onChange={(e) =>
              handleEditChange(params.id, params.field, e.target.value)
            }
          />
        ) : (
          params.value
        ),
    },
    {
      field: "terminateURL",
      headerName: "Terminate URL",
      width: 190,
      align: "left",
      editable: false,
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
      renderCell: (params) =>
        edit ? (
          <TextField
            variant="standard"
            value={params.value}
            onChange={(e) =>
              handleEditChange(params.id, params.field, e.target.value)
            }
          />
        ) : (
          params.value
        ),
    },
    {
      field: "costPerSurvey",
      headerName: "Cost/Survey",
      width: 170,
      align: "center",
      editable: false,
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",

      renderCell: (params) =>
        edit ? (
          <TextField
            variant="standard"
            value={params.value}
            onChange={(e) =>
              handleEditChange(params.id, params.field, e.target.value)
            }
          />
        ) : (
          params.value
        ),
    },
    {
      field: "Target Surveys",
      headerName: "Target Surveys",
      width: 190,
      align: "center",
      editable: false,
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",

      renderCell: (params) =>
        edit ? (
          <TextField
            variant="standard"
            value={params.value}
            onChange={(e) =>
              handleEditChange(params.id, params.field, e.target.value)
            }
          />
        ) : (
          params.value
        ),
    },
  ];

  const content = (
    <Grid container spacing={2}>
      <Grid
        item
        container
        className="heading-grid2"
        justifyContent="space-between"
        alignItems="end"
      >
        <Grid item md={5} xs={12}>
          <MuiMultiSelectDropdown
            label={"Vendor"}
            value={selectedVendors.map((vendor) => vendor.vendorName)}
            onChange={handleVendorChange}
            options={userDataNew.map((element) => element.vendorName)}
          />
        </Grid>
        <Grid
          item
          container
          justifyContent="flex-end"
          alignItems="end"
          spacing={2}
          md={7}
          xs={12}
        >
          <Grid item display="flex" justifyContent={"flex-end"}>
            <Button
              variant="outlined"
              color="error"
              onClick={handleEdit}
              className="client-button export-class"
              startIcon={<EditIcon color="primary" fontSize="large" />}
              disabled={selectedVendors.length === 0}
            >
              Edit
            </Button>
          </Grid>
          <Grid item display="flex" justifyContent={"flex-end"}>
            <Button
              variant="outlined"
              color="error"
              onClick={handleSave}
              className="client-button add-class"
              startIcon={
                <DescriptionOutlinedIcon color="success" fontSize="large" />
              }
              disabled={selectedVendors.length === 0}
            >
              Save
            </Button>
          </Grid>
          <Grid item display="flex" justifyContent={"flex-end"}>
            <Button
              variant="outlined"
              color="error"
              onClick={handleDelete}
              className="client-button delete-class"
              disabled={selectedRowIds.length === 0}
              startIcon={<DeleteOutlinedIcon color="error" fontSize="large" />}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {selectedVendors.length > 0 ? (
        <Grid item container justifyContent="center" alignItems="center">
          <Grid item className="assignVendor-list-datagrid">
            <MuiDataGrid
              rows={selectedVendors}
              columns={columns}
              checkboxSelection
              onRowSelectionModelChange={(newSelection) => {
                setSelectedRowIds(newSelection);
              }}
            />
          </Grid>
        </Grid>
      ) : (
        <Grid item container justifyContent="center" alignItems="center">
          <Typography
            variant="h6"
            textAlign="center"
            className="assignVendor-list-datagrid"
          >
            No vendor selected yet.
          </Typography>
        </Grid>
      )}

      <Grid item>
        <SuccessErrorModal
          show={showSuccessModal}
          handleClose={handleClose}
          imageSrc={tickFrame}
          clientName={"Vendor"}
          isSuccess={true}
          text={"has been successfully assigned."}
          buttonPrimaryText="Ok"
          handleModalButtonClick={handleModalButtonClick}
        />
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="ASSIGN VENDOR" />;
};

export default AssignVendor;
