import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import Layout from "../Layout";
import { Grid, Paper, Typography } from "@mui/material";
import LabelValueCard from "../../../Components/LabelValueCard/Index";
import "../Client/Style.css";
import { useSelector } from "react-redux";
import { selectedRow } from "../../../Store/Slice/rowSelectionSlice";

const ProjectDetail = () => {
  const dataArray = useSelector(selectedRow);
  const [isEditable, setIsEditable] = useState(false);
  const { id } = useParams();

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const cardArray = [
    {
      vendorName: "Vendor Name",
      successURL: "exampleURL.com",
      terminateURL: "exampleURL.com",
      quotafullURL: "exampleURL.com",
      costPerSurvey: "45",
    },
    {
      vendorName: "Vendor Name",
      successURL: "exampleURL.com",
      terminateURL: "exampleURL.com",
      quotafullURL: "exampleURL.com",
      costPerSurvey: "45",
    },
    {
      vendorName: "Vendor Name",
      successURL: "exampleURL.com",
      terminateURL: "exampleURL.com",
      quotafullURL: "exampleURL.com",
      costPerSurvey: "45",
    },
  ];

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
        Project & Client Information
      </Grid>
      <Grid item container md={10}>
        <Grid item container md={8}>
          <Grid item className="one-in-a-row">
            <LabelValueCard
              label={"Project Name"}
              disabled={!isEditable}
              value={
                dataArray[0]?.projectName
                  ? dataArray[0]?.projectName
                  : "ScrutinyGlobal"
              }
            />
          </Grid>
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
              label="Start Date"
              value={
                dataArray[0]?.startDate
                  ? dataArray[0]?.startDate
                  : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
          <Grid item md={6}>
            <LabelValueCard
              label="End Date"
              value={
                dataArray[0]?.endDate ? dataArray[0]?.endDate : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
        <Grid item container spacing={5}>
          <Grid item md={6}>
            <LabelValueCard
              label="Project Head"
              value={
                dataArray[0]?.projectHead
                  ? dataArray[0]?.projectHead
                  : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
          <Grid item md={6}>
            <LabelValueCard
              label="Pre Sales SPOC"
              value={dataArray[0]?.SPOC ? dataArray[0]?.SPOC : "ScrutinyGlobal"}
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
        <Grid item container spacing={5}>
          <Grid item md={6}>
            <LabelValueCard
              label="Audience Type"
              value={
                dataArray[0]?.audienceType
                  ? dataArray[0]?.audienceType
                  : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
          <Grid item md={6}>
            <LabelValueCard
              label="Project Budget"
              value={
                dataArray[0]?.projectBudget
                  ? dataArray[0]?.projectBudget
                  : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item className="section-heading">
        Assigned Vendors
      </Grid>
      <Grid item className="assignVendor-parent-container">
        {cardArray.map((item, index) => (
          <Grid
            item
            container
            md={7}
            key={index}
            className="assign-vendor-container"
          >
            {/* <Paper elevation={5} > */}
            <Grid item>
              <Typography className="vendor-name">{item.vendorName}</Typography>
            </Grid>
            <Grid item container alignItems="center">
              <Grid item>
                <Typography className="vendor-name"> Success URL:</Typography>
              </Grid>
              <Grid item>
                <Typography> {item.successURL}</Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems="center">
              <Grid item>
                <Typography className="vendor-name"> Quotafull URL:</Typography>
              </Grid>
              <Grid item>
                <Typography> {item.quotafullURL}</Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems="center">
              <Grid item>
                <Typography className="vendor-name"> Terminate URL:</Typography>
              </Grid>
              <Grid item>
                <Typography> {item.terminateURL}</Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems="center">
              <Grid item>
                <Typography className="vendor-name"> Cost/survey:</Typography>
              </Grid>
              <Grid item>
                <Typography>Rs {item.costPerSurvey}</Typography>
              </Grid>
            </Grid>
            {/* </Paper> */}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="PROJECT DETAILS" />;
};

export default ProjectDetail;
