import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CustomModal from "../../MuiComponents/MuiModal/Index";
import OtpInput from "react-otp-input";
import "./Style.css";

const OtpModal = ({
  show,
  handleClose,
  heading,
  content,
  otpProps,
  buttonPrimaryText,
  handleModalButtonClick,
}) => {
  const otpContent = () => {
    return (
      <Grid container spacing={4} className="parent-grid">
        <Grid item>{content}</Grid>
        <Grid item>
          <OtpInput
            value={otpProps.otp}
            onChange={otpProps.onChangeOTP}
            renderSeparator={<span style={{ margin: "0 10px" }}> </span>}
            renderInput={(props) => <input {...props} />}
            numInputs={4}
            inputStyle={{
              width: "4rem",
              height: "3rem",
              fontSize: "2rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </Grid>
      </Grid>
    );
  };

  const additionalContent = () => {
    return (
      <Grid container className="parent-grid">
        <Grid item>
          <Typography variant="body2" component="div" sx={{ my: 4 }}>
            Are you facing any problem in receiving the code?{" "}
            <span className="resend-code">Resend Code</span>
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            onClick={otpProps.handleToggleMethod}
            className="button"
          >
            {otpProps.verifyMethod === "email"
              ? "Verify using Mobile Number"
              : "Verify using Email"}
          </Button>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <Grid container className="parent-grid">
        <CustomModal
          show={show}
          heading={heading}
          handleClose={handleClose}
          content={otpContent()}
          buttonPrimaryText={"Verify"}
          handleModalButtonClick={handleModalButtonClick}
          additionalContent={additionalContent()}
        />
      </Grid>
    </>
  );
};

export default OtpModal;
