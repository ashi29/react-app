import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Auth/Style.css";
import { MuiTextField } from "../../MuiComponents/MuiTextField/Index";
import AuthPage from "./AuthPage";
import MuiModal from "../../MuiComponents/MuiModal/Index";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";

const ResetPassword = ({}) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const onChangeNewPassword = (event) => {
    event.preventDefault();
    setNewPassword(event.target.value);
  };

  const onChangeConfirmPassword = (event) => {
    event.preventDefault();
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const form = (
    <form onSubmit={handleSubmit}>
      <MuiTextField
        name="newPassword"
        type="password"
        value={newPassword}
        label="New Password"
        onChange={onChangeNewPassword}
      />

      <MuiTextField
        name="confirmPassword"
        type="password"
        value={confirmPassword}
        label="Confirm Password"
        onChange={onChangeConfirmPassword}
      />

      <Box display="flex" justifyContent="center" alignItems="center">
        <MuiContainedButton
          type="submit"
          buttonText="Save Password"
          width={true}
          mt={4}
        />
      </Box>
    </form>
  );

  const handleGoToLogin = () => {
    navigate("/login");
  };

  const additionalComponent = (
    <MuiModal
      show={show}
      defaultImage={true}
      handleClose={handleClose}
      heading={
        <>
          Password Successfully
          <br /> changed 🎉
        </>
      }
      buttonPrimaryText="Go to Log In"
      handleModalButtonClick={handleGoToLogin}
    />
  );

  return (
    <AuthPage
      form={form}
      heading={"Reset Password"}
      cardActionLinkText={"Go Back to Log In"}
      cardActionLinkTo={"login"}
      additionalComponent={additionalComponent}
    />
  );
};

export default ResetPassword;
