import { Grid, Paper, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import Layout from "./Layout";
import "../SuperAdmin/Client/Style.css";
import { Edit } from "@mui/icons-material";
import dummy from "../../Images/dummy1.png";
import ProfileCardObject from "../../Components/ProfileCardObject/Index";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    name: "Gaurav Wadhwa",
    email: "gauravwadhwa@gmail.com",
    image: dummy,
    contactNumber: "987654321",
    dob: "01/12/2001",
    profession: "Engineer",
    experience: "2 years",
    monthlySalary: "Rs 50,000",
    accountType: "Client",
    address: "Gaurav Wadwa",
    city: "Delhi",
    pincode: "540001",
    state: "Delhi",
    country: "India",
  });

  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setEditMode(false);
    // Add logic to save changes, e.g., send to a server
  };

  const content = (
    <Grid container className="profile-detail-grid">
      <Grid item xs={12} md={11.5} textAlign="right">
        <MuiContainedButton
          type={"submit"}
          onClickFunction={handleSave}
          buttonText={"Save"}
          className={"profile-save-button"}
        />
        <IconButton onClick={handleEditClick}>
          <Edit color="action" fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item md={11} container direction="row" justifyContent="center">
        <Grid
          item
          container
          md={5}
          xs={12}
          //   justifyContent="center"
          //   alignItems="center"
          direction="column"
        >
          <Paper className="profile-card-1">
            <Grid
              item
              container
              xs={12}
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={userDetails.image}
                alt="profile"
                className="profile-picture"
              />
            </Grid>
            <Typography className="profile-card-1-heading">
              {userDetails.name}
            </Typography>
            <Typography className="profile-card-1-text">
              {userDetails.email}
            </Typography>
            <Typography className="profile-card-1-text">
              {userDetails.contactNumber}
            </Typography>
          </Paper>
          <Grid item>
            <Typography className="change-password">Change Password</Typography>
          </Grid>
        </Grid>
        <Grid item container xs={12} md={7}>
          <Grid item md={12} xs={12} className="profile-card-2">
            <Typography className="profile-card2-heading" gutterBottom>
              Personal Details
            </Typography>
            <ProfileCardObject
              label="Name"
              value={userDetails.name}
              name="name"
              editMode={editMode}
              handleChange={handleChange}
            />
            <ProfileCardObject
              label="Email"
              value={userDetails.email}
              name="email"
              editMode={editMode}
              handleChange={handleChange}
            />
            <ProfileCardObject
              label="Number"
              value={userDetails.contactNumber}
              name="contactNumber"
              editMode={editMode}
              handleChange={handleChange}
            />
            <ProfileCardObject
              label="DOB"
              value={userDetails.dob}
              name="dob"
              editMode={editMode}
              handleChange={handleChange}
            />
            <ProfileCardObject
              label="Profession"
              value={userDetails.profession}
              name="profession"
              editMode={editMode}
              handleChange={handleChange}
            />
            <ProfileCardObject
              label="Experience"
              value={userDetails.experience}
              name="experience"
              editMode={editMode}
              handleChange={handleChange}
            />
            <ProfileCardObject
              label="Monthly Salary"
              value={userDetails.monthlySalary}
              name="monthlySalary"
              editMode={editMode}
              handleChange={handleChange}
            />
            <ProfileCardObject
              label="Account Type"
              value={userDetails.accountType}
              name="accountType"
              editMode={editMode}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item md={12} xs={12} className="profile-card-2">
            <Typography className="profile-card2-heading" gutterBottom>
              Address Details
            </Typography>
            <ProfileCardObject
              label="Address"
              value={userDetails.address}
              name="address"
              editMode={editMode}
              handleChange={handleChange}
            />
            <ProfileCardObject
              label="City"
              value={userDetails.city}
              name="city"
              editMode={editMode}
              handleChange={handleChange}
            />
            <ProfileCardObject
              label="Pincode"
              value={userDetails.pincode}
              name="pincode"
              editMode={editMode}
              handleChange={handleChange}
            />
            <ProfileCardObject
              label="State/Province"
              value={userDetails.state}
              name="state"
              editMode={editMode}
              handleChange={handleChange}
            />
            <ProfileCardObject
              label="Country"
              value={userDetails.country}
              name="country"
              editMode={editMode}
              handleChange={handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
  return <Layout content={content} navbarHeading="USER PROFILE" />;
};

export default Profile;
