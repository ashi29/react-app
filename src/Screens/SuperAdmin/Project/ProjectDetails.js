import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Layout from "../Layout";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import LabelValueCard from "../../../Components/LabelValueCard/Index";
import "../Client/Style.css";
import { useSelector } from "react-redux";
import { selectedRow } from "../../../Store/Slice/rowSelectionSlice";
import { API_PREFIX } from "../../../config";

const ProjectDetail = () => {
  const dataArray = useSelector(selectedRow);
  const [isEditable, setIsEditable] = useState(false);
  const [responseData, setResponseData] = useState([]);

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  useEffect(() => {
    getVendorData();
  }, []);

  function getVendorData() {
    fetch(`${API_PREFIX}getProjectVenderList?venderMappingId=V5127`, {
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
  const vendorGridData = {
    vendorName: [],
    successURL: [],
    terminateURL: [],
    quotafullURL: [],
    costPerSurvey: [],
  };

  const [userDataNew, setUserDataNew] = useState([]);
  useEffect(() => {
    setUserDataNew(convertData(responseData));
  }, [responseData]);
  function convertData(data) {
    // console.log(data);
    data.map((element) => vendorGridData.vendorName.push(element.name));
    data.map((element) => vendorGridData.successURL.push(element.successurl));
    data.map((element) =>
      vendorGridData.terminateURL.push(element.terminateurl)
    );
    data.map((element) =>
      vendorGridData.quotafullURL.push(element.quota_fullurl)
    );
    data.map((element) => vendorGridData.costPerSurvey.push(element.rate));

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
    console.log("testing", userDataNew);

    return userDataConverted;
  }

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

  const vendorLength = cardArray.length;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const content = (
    <Grid container className="client-detail-grid" spacing={2}>
      <Grid item xs={12} md={11.5} textAlign="right">
        <EditIcon
          color="primary"
          fontSize="large"
          cursor="pointer"
          onClick={handleEditClick}
        />
      </Grid>
      <Grid item xs={12} className="section-heading">
        Project & Client Information
      </Grid>
      <Grid item container xs={12} md={10} spacing={2}>
        <Grid item xs={12} md={8}>
          <Grid item xs={12} className={isMobile ? "" : "one-in-a-row"}>
            <LabelValueCard
              label={"Project Name"}
              disabled={!isEditable}
              value={
                dataArray[0]?.project_name ? dataArray[0]?.project_name : ""
              }
            />
          </Grid>
          <Grid item xs={12} className={isMobile ? "" : "one-in-a-row"}>
            <LabelValueCard
              label={"Client Name"}
              value={dataArray[0]?.clientName ? dataArray[0]?.clientName : ""}
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
        <Grid item container xs={12} spacing={2}>
          <Grid item xs={12} md={6}>
            <LabelValueCard
              label="Contact Number"
              value={dataArray[0]?.number ? dataArray[0]?.number : ""}
              disabled={!isEditable}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <LabelValueCard
              label="Alt. Contact Number"
              value={
                dataArray[0]?.alternate_number
                  ? dataArray[0]?.alternate_number
                  : ""
              }
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
        <Grid item container xs={12} spacing={2}>
          <Grid item xs={12} md={6}>
            <LabelValueCard
              label="Start Date"
              value={
                dataArray[0]?.project_start_time
                  ? dataArray[0]?.project_start_time
                  : ""
              }
              disabled={!isEditable}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <LabelValueCard
              label="End Date"
              value={
                dataArray[0]?.project_end_time
                  ? dataArray[0]?.project_end_time
                  : ""
              }
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
        <Grid item container xs={12} spacing={2}>
          <Grid item xs={12} md={6}>
            <LabelValueCard
              label="Project Head"
              value={
                dataArray[0]?.project_head_id
                  ? dataArray[0]?.project_head_id
                  : ""
              }
              disabled={!isEditable}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <LabelValueCard
              label="Pre Sales SPOC"
              value={
                dataArray[0]?.pre_salespoc ? dataArray[0]?.pre_salespoc : ""
              }
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
        <Grid item container xs={12} spacing={2}>
          <Grid item xs={12} md={6}>
            <LabelValueCard
              label="Audience Type"
              value={
                dataArray[0]?.audience_type ? dataArray[0]?.audience_type : ""
              }
              disabled={!isEditable}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <LabelValueCard
              label="Project Budget"
              value={
                dataArray[0]?.project_minimum_fee
                  ? dataArray[0]?.project_minimum_fee
                  : ""
              }
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} className="section-heading">
        Assigned Vendors
      </Grid>
      <Grid item xs={12} className="assignVendor-parent-container">
        {vendorLength === 0 ? (
          <Typography textAlign={"center"}>No vendors assigned yet</Typography>
        ) : (
          userDataNew.slice(0, vendorLength).map((item, index) => (
            <Grid
              item
              container
              xs={12}
              md={9}
              key={index}
              className={isMobile ? "" : "assign-vendor-container"}
            >
              <Grid item xs={12}>
                <Typography className="vendor-name">
                  {item.vendorName}
                </Typography>
              </Grid>
              <Grid item container alignItems="center" xs={12}>
                <Grid item>
                  <Typography className="vendor-name"> Success URL:</Typography>
                </Grid>
                <Grid item>
                  <Typography> {item.successURL}</Typography>
                </Grid>
              </Grid>
              <Grid item container alignItems="center" xs={12}>
                <Grid item>
                  <Typography className="vendor-name">
                    {" "}
                    Quotafull URL:
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography> {item.quotafullURL}</Typography>
                </Grid>
              </Grid>
              <Grid item container alignItems="center" xs={12}>
                <Grid item>
                  <Typography className="vendor-name">
                    {" "}
                    Terminate URL:
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography> {item.terminateURL}</Typography>
                </Grid>
              </Grid>
              <Grid item container alignItems="center" xs={12}>
                <Grid item>
                  <Typography className="vendor-name"> Cost/survey:</Typography>
                </Grid>
                <Grid item>
                  <Typography>Rs {item.costPerSurvey}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))
        )}
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="PROJECT DETAILS" />;
};

export default ProjectDetail;
