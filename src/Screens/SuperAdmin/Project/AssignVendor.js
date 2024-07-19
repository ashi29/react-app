import React, { useState } from "react";
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

const AssignVendor = () => {
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  const vendors = [
    {
      id: 1,
      vendorName: "Vendor 1",
      successURL: "exampleURL.com",
      terminateURL: "exampleURL.com",
      quotafullURL: "exampleURL.com",
      costPerSurvey: "45",
    },
    {
      id: 2,
      vendorName: "Vendor 2",
      successURL: "exampleURL.com",
      terminateURL: "exampleURL.com",
      quotafullURL: "exampleURL.com",
      costPerSurvey: "45",
    },
    {
      id: 3,
      vendorName: "Vendor 3",
      successURL:
        "exampleURL.comexampleURL.comexampleURL.comexampleURL.comexampleURL.comexampleURL.com",
      terminateURL: "exampleURL.com",
      quotafullURL: "exampleURL.com",
      costPerSurvey: "45",
    },
  ];

  const handleVendorChange = (event) => {
    const {
      target: { value },
    } = event;

    const selectedVendorNames =
      typeof value === "string" ? value.split(",") : value;
    const updatedSelectedVendors = selectedVendorNames.map((vendorName) =>
      vendors.find((vendor) => vendor.vendorName === vendorName)
    );

    setSelectedVendors(updatedSelectedVendors);
    setSelectedRowIds([]);
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
      align: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
    },
    {
      field: "link",
      headerName: "Copy Link",
      width: 100,
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
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "successURL",
      headerName: "Success URL",
      width: 190,
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
    <Grid container md={12} spacing={2}>
      <Grid
        item
        container
        className="heading-grid2"
        justifyContent="space-between"
        alignItems="end"
      >
        <Grid item md={5}>
          <MuiMultiSelectDropdown
            label={"Vendor"}
            value={selectedVendors.map((vendor) => vendor.vendorName)}
            onChange={handleVendorChange}
            options={vendors.map((item) => item.vendorName)}
          />
        </Grid>
        <Grid
          item
          container
          justifyContent="flex-end"
          alignItems="end"
          spacing={2}
          md={7}
        >
          <Grid item>
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
          <Grid item>
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
          <Grid item>
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
        <Grid
          item
          container
          md={12}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item className="assignVendor-list-datagrid">
            <MuiDataGrid
              rows={selectedVendors}
              columns={columns}
              checkboxSelection
              onRowSelectionModelChange={(newSelection) => {
                console.log("Hi");
                setSelectedRowIds(newSelection);
              }}
            />
          </Grid>
        </Grid>
      ) : (
        <Grid
          item
          container
          md={11}
          justifyContent="center"
          alignItems="center"
        >
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
