import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import { useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Grid, Switch, Typography } from "@mui/material";
import LabelValueCard from "../../../Components/LabelValueCard/Index";
import { selectedRow } from "../../../Store/Slice/rowSelectionSlice";

const VendorDetail = () => {
  const dataArray = useSelector(selectedRow);
  console.log("selectedRows11 :>> ", dataArray[0]);
  const [isEditable, setIsEditable] = useState(false);
  const { id } = useParams();

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const content = (
    <Grid container className="client-detail-grid">
      <Grid item md={11.5} textAlign="right">
        <EditIcon
          color="primary"
          fontSize="large"
          cursor="pointer"
          onClick={handleEditClick}
        />
      </Grid>
      <Grid item className="section-heading">
        Contact Information
      </Grid>
      <Grid item container md={10}>
        <Grid item container spacing={5}>
          <Grid item md={6}>
            <LabelValueCard
              label={"Vendors Name"}
              value={
                dataArray[0]?.vendorName
                  ? dataArray[0]?.vendorName
                  : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
          <Grid item md={6}>
            <LabelValueCard
              label={"Email"}
              value={
                dataArray[0]?.email
                  ? dataArray[0]?.email
                  : "scrutinyglobal0987@gmail.com"
              }
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
        <Grid item container spacing={5}>
          <Grid item md={6}>
            <LabelValueCard
              label="Contact Number"
              value={
                dataArray[0]?.contactNumber
                  ? dataArray[0]?.contactNumber
                  : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
          <Grid item md={6}>
            <LabelValueCard
              label="Alt. Contact Number"
              value={
                dataArray[0]?.altContactNumber
                  ? dataArray[0]?.altContactNumber
                  : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
        <Grid item container spacing={5}>
          <Grid item md={6}>
            <LabelValueCard
              label="Address"
              value={
                dataArray[0]?.address ? dataArray[0]?.address : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
          <Grid item md={6}>
            <LabelValueCard
              label="City"
              value={dataArray[0]?.city ? dataArray[0]?.city : "ScrutinyGlobal"}
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
        <Grid item container spacing={5}>
          <Grid item md={6}>
            <LabelValueCard
              label="Country"
              value={
                dataArray[0]?.country ? dataArray[0]?.country : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
          <Grid item md={6}>
            <LabelValueCard
              label="Pincode"
              value={
                dataArray[0]?.pincode ? dataArray[0]?.pincode : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* <Grid item className="section-heading">
        Redirect Links
      </Grid>
      <Grid item container md={6}>
        <Grid item className="one-in-a-row">
          <LabelValueCard
            label={"Success URL"}
            value={
              dataArray[0]?.successURL
                ? dataArray[0]?.successURL
                : "ScrutinyGlobal"
            }
            disabled={!isEditable}
          />
        </Grid>
        <Grid item className="one-in-a-row">
          <LabelValueCard
            label={"Terminate URL"}
            value={
              dataArray[0]?.terminateURL
                ? dataArray[0]?.terminateURL
                : "ScrutinyGlobal"
            }
            disabled={!isEditable}
          />
        </Grid>

        <Grid item className="one-in-a-row">
          <LabelValueCard
            label={"Quotaful URL"}
            value={
              dataArray[0]?.quotafulURL
                ? dataArray[0]?.quotafulURL
                : "ScrutinyGlobal"
            }
            disabled={!isEditable}
          />
        </Grid>
      </Grid> */}

      <Grid item className="section-heading">
        Comapny & Bank Details
      </Grid>
      <Grid item container md={10}>
        <Grid item container spacing={5}>
          <Grid item md={6}>
            <LabelValueCard
              label={"Registration Number"}
              value={
                dataArray[0]?.registrationNo
                  ? dataArray[0]?.registrationNo
                  : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
          <Grid item md={6}>
            <LabelValueCard
              label={"PAN Number"}
              value={
                dataArray[0]?.panNumber ? dataArray[0]?.panNumber : "12345"
              }
              disabled={!isEditable}
            />
          </Grid>
        </Grid>

        <Grid item container spacing={5}>
          <Grid item md={6}>
            <LabelValueCard
              label="Bank Branch Address"
              value={
                dataArray[0]?.bankBranchAddress
                  ? dataArray[0]?.bankBranchAddress
                  : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
          <Grid item md={6}>
            <LabelValueCard
              label="Account Number"
              value={
                dataArray[0]?.accountNo
                  ? dataArray[0]?.accountNo
                  : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          spacing={5}
          className="add-margin-below active-inactive-grid"
        >
          <Grid item md={6}>
            <LabelValueCard
              label="Account Type"
              value={
                dataArray[0]?.accountType
                  ? dataArray[0]?.accountType
                  : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
          <Grid item md={6}>
            <LabelValueCard
              label="IFSC Code"
              value={dataArray[0]?.ifsc ? dataArray[0]?.ifsc : "ScrutinyGlobal"}
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="VENDOR DETAILS" />;
};

export default VendorDetail;
