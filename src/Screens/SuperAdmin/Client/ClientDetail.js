import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import Layout from "../Layout";
import { useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import { Grid, Switch, Typography } from "@mui/material";
import LabelValueCard from "../../../Components/LabelValueCard/Index";
import { selectedRow } from "../../../Store/Slice/rowSelectionSlice";

const ClientDetail = () => {
  const dataArray = useSelector(selectedRow);
  const [isActive, setIsActive] = useState(
    dataArray[0]?.status ? dataArray[0]?.status : false
  );
  const [isEditable, setIsEditable] = useState(false);
  // const { id } = useParams();

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const handleSwitchChange = (event) => {
    setIsActive(event.target.checked);
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
        <Grid item container md={8}>
          <Grid item className="one-in-a-row">
            <LabelValueCard
              label={"Client Name"}
              value={
                dataArray[0]?.clientName
                  ? dataArray[0]?.clientName
                  : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
        <Grid item container spacing={5}>
          <Grid item md={6}>
            <LabelValueCard
              label="Contact Name"
              value={
                dataArray[0]?.contactName
                  ? dataArray[0]?.contactName
                  : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
          <Grid item md={6}>
            <LabelValueCard
              label="Alt. Contact Name"
              value={
                dataArray[0]?.altContactName
                  ? dataArray[0]?.altContactName
                  : "ScrutinyGlobal"
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
        <Grid item container md={8}>
          <Grid item className="one-in-a-row">
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

          <Grid item className="one-in-a-row">
            <LabelValueCard
              label={"Website Link"}
              value={
                dataArray[0]?.websiteLink
                  ? dataArray[0]?.websiteLink
                  : "www.scrutinyglobal.com"
              }
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item className="section-heading">
        Address Information
      </Grid>
      <Grid item container md={10}>
        <Grid item container md={8}>
          <Grid item className="one-in-a-row">
            <LabelValueCard
              label={"Address"}
              value={
                dataArray[0]?.address ? dataArray[0]?.address : "ScrutinyGlobal"
              }
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
              label="Currency"
              value={
                dataArray[0]?.currency
                  ? dataArray[0]?.currency
                  : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
        <Grid item container md={8}>
          <Grid item className="one-in-a-row">
            <LabelValueCard
              label={"Industry"}
              value={
                dataArray[0]?.industry
                  ? dataArray[0]?.industry
                  : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item className="section-heading">
        Status
      </Grid>
      <Grid
        item
        container
        className="active-inactive-grid"
        alignItems="flex-start"
      >
        <Grid item>
          <Switch
            color="success"
            size="large"
            checked={isActive}
            disabled={!isEditable}
            // className="active-inactive-toggle"
            onChange={handleSwitchChange}
          />
        </Grid>
        <Grid item>
          <Typography className="active-inactive">
            {isActive ? "Active" : "Inactive"}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="CLIENT DETAILS" />;
};

export default ClientDetail;
