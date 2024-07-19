import React from "react";
import { Typography, Grid, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomContainedButton from "../../MuiComponents/MuiContainedButton/Index";
import "./Style.css";

const SuccessErrorModal = ({
  show,
  handleClose,
  imageSrc,
  clientName,
  isSuccess,
  heading,
  buttonSecondaryText,
  text,
  buttonPrimaryText,
  handleModalButtonClick,
}) => {
  const handlePrimaryButton = () => {
    handleModalButtonClick();
  };

  const handleSecondaryButton = () => {
    // handleClose();
    handleModalButtonClick();
  };

  return (
    <Modal open={show}>
      <Grid container className="modal-container">
        <Grid item container sx={{ m: 1 }}>
          <Grid item xs={12} className="modal-close">
            <IconButton onClick={handleClose}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid container justifyContent="center" item md={12}>
            <img
              src={imageSrc}
              alt="modal-image"
              className="successErrormodal-image"
            />
          </Grid>
        </Grid>

        <Grid item>
          {heading ? (
            <Typography className="modal-heading">{heading}</Typography>
          ) : (
            <Typography className="modal-heading">
              {isSuccess ? "Successful !!" : "Error !!"}
            </Typography>
          )}
        </Grid>
        <Grid item container justifyContent="center">
          <Typography className="modal-content-text">
            {clientName ? clientName : "(Client Name)"} {text}
          </Typography>
        </Grid>

        <Grid item xs={12} className="modal-item modal-item2" sx={{ my: 3 }}>
          {buttonSecondaryText && (
            <CustomContainedButton
              type="button"
              onClickFunction={handleSecondaryButton}
              buttonText={buttonSecondaryText}
              width={true}
              className={"orange-waiting-button"}
            />
          )}
          {buttonPrimaryText && (
            <CustomContainedButton
              type="button"
              onClickFunction={handlePrimaryButton}
              buttonText={buttonPrimaryText}
              width={true}
              className={
                isSuccess ? "green-success-button" : "red-error-button"
              }
            />
          )}
        </Grid>
      </Grid>
    </Modal>
  );
};

export default SuccessErrorModal;
