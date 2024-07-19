import { Button, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import "./Style.css";
// import MuiContainedButton from "../../../MuiComponents/MuiContainedButton/Index";
import CustomModal from "../../../MuiComponents/MuiModal/Index";
import LabelValueCard from "../../../Components/LabelValueCard/Index";
import MuiDataGrid from "../../../MuiComponents/MuiDataGrid/Index";
import { CheckBox } from "@mui/icons-material";

const VendorRFQ = () => {
  const [show, setShow] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSendRFQ = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const [columns, setColumns] = useState([
    {
      field: "select",
      headerName: "",
      width: 50,
      renderCell: (params) => (
        <CheckBox
          checked={selectedRows.some((row) => row.id === params.row.id)}
          onChange={() => handleCheckboxChange(params.row)}
        />
      ),
    },
    {
      field: "vendor",
      headerName: "Vendor",
      width: 150,
      align: "center",
      headerAlign: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header-accpetedRFQ",
    },
    {
      field: "contact",
      headerName: "Contact",
      align: "center",
      width: 150,
      headerAlign: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header-accpetedRFQ",
    },
    {
      field: "email",
      headerName: "Email",
      width: 160,
      align: "center",
      headerClassName: "dataGrid-header-accpetedRFQ",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
      align: "center",
      headerClassName: "dataGrid-header-accpetedRFQ",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "city",
      headerName: "City",
      width: 150,
      align: "center",
      headerClassName: "dataGrid-header-accpetedRFQ",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "pinCode",
      headerName: "Pin code",
      width: 150,
      align: "center",
      headerClassName: "dataGrid-header-accpetedRFQ",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "country",
      headerName: "Country",
      width: 150,
      align: "center",
      headerClassName: "dataGrid-header-accpetedRFQ",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
  ]);

  const rows = [
    {
      id: 1,
      vendor: "Gaurav",
      contact: "2840302222",
      email: "gaurav@gmail.com",
      address: "231 street, Bangalore",
      city: "Bangalore",
      pinCode: "56001",
      country: "India",
    },
    {
      id: 2,
      vendor: "Gaurav",
      contact: "2840302222",
      email: "gaurav@gmail.com",
      address: "231 street, Bangalore",
      city: "Bangalore",
      pinCode: "56001",
      country: "India",
    },
  ];

  const handleCheckboxChange = (row) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.some((selectedRow) => selectedRow.id === row.id)
        ? prevSelectedRows.filter((selectedRow) => selectedRow.id !== row.id)
        : [...prevSelectedRows, row]
    );
  };

  console.log("selectedRows :>> ", selectedRows);
  return (
    <Grid container className="client-detail-grid">
      <Grid item className="section-heading">
        Vendor RFQ
      </Grid>
      <Grid item container md={10} justifyContent="space-between">
        <Grid item md={5}>
          <LabelValueCard
            label={"Project Name"}
            // disabled={!isEditable}
            value={"ScrutinyGlobal"}
          />
        </Grid>
        <Grid item md={5}>
          <LabelValueCard
            label={"Client Name"}
            value={"ScrutinyGlobal"}
            // disabled={!isEditable}
          />
        </Grid>
      </Grid>
      <Grid item container md={10} justifyContent="space-between">
        <Grid item md={5}>
          <LabelValueCard
            label="Start Date"
            value={"01-07-2024"}
            //   disabled={!isEditable}
          />
        </Grid>
        <Grid item md={5}>
          <LabelValueCard
            label="End Date"
            value={"01-07-2024"}
            //   disabled={!isEditable}
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item container justifyContent="space-between">
          <Grid item>
            <Paper elevation={0}>SUITABLE VENDORS</Paper>
          </Grid>
          <Grid item>
            <Button
              type="button"
              onClick={handleSendRFQ}
              color="success"
              variant="contained"
              //   buttonText={"Send RFQ"}
              //   className="StepForm-next"
              startIcon={<DescriptionOutlinedIcon />}
            >
              Send RFQ
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <MuiDataGrid rows={rows} columns={columns} />
        </Grid>
      </Grid>

      <CustomModal
        show={show}
        handleClose={handleClose}
        heading="RFQ sent to Gaurav!"
        buttonPrimaryText="Continue"
        colorHeading={"success"}
        handleModalButtonClick={handleClose}
      />
    </Grid>
  );
};

export default VendorRFQ;