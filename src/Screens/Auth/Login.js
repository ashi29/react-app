import { FormHelperText, Grid, Paper } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
import { MuiTextField } from "../../MuiComponents/MuiTextField/Index";
import WaitingModal from "../../Images/ModalImages/WaitingModal.png";
import AuthPage from "./AuthPage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";
import SuccessErrorModal from "../../Components/SuccesErrorModal/Index";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showWaitingModal, setShowWaitingModal] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChangeUsername = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
    setLoginData({ ...loginData, username: event.target.value });
  };

  const onChangePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
    setLoginData({ ...loginData, password: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://ec2-13-239-62-154.ap-southeast-2.compute.amazonaws.com:8080/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    }).then(function (response) {
      if (response.status === 200) {
        navigate("/dashboard");
      }
      return response.json();
    });
  };

  const handleWaitingModal = () => {
    setShowWaitingModal(true);
  };

  const handleGoToLogin = () => {
    navigate("/login");
  };

  const handleClose = () => {
    setShowWaitingModal(false);
  };

  const form = (
    <form>
      <MuiTextField
        type="text"
        value={username}
        label="Email or Number"
        onChange={onChangeUsername}
      />

      <MuiTextField
        type="password"
        value={password}
        label="Password"
        onChange={onChangePassword}
      />

      <FormHelperText className="arimo-input-label helperText">
        <Link to="/forgotPassword" className="arimo-input-label helperText">
          forgot password?
        </Link>
      </FormHelperText>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <MuiContainedButton
          type={"submit"}
          width={"40%"}
          buttonText={"Log In"}
          onClickFunction={handleSubmit}
        />
      </Grid>

      <Grid container justifyContent="center" alignItems="center">
        <ArrowBackIcon className="goBackHome" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <Paper elevation={0} className="goBackHome">
            Go back to Home
          </Paper>
        </Link>
      </Grid>
    </form>
  );

  const additionalComponent = (
    <SuccessErrorModal
      show={showWaitingModal}
      handleClose={handleClose}
      imageSrc={WaitingModal}
      heading={"Oops !! Waiting Approval."}
      clientName={"Your"}
      text={
        " approval request has not been accepted yet. Once you are approved try logging in again. Thanks for waiting."
      }
      buttonSecondaryText="Ok"
      handleModalButtonClick={handleGoToLogin}
    />
  );

  return (
    <AuthPage
      form={form}
      cardActionLinkText={" Sign up here"}
      cardActionLinkTo={"register"}
      cardActionText={"Are you new? "}
      heading={"Login"}
      additionalComponent={additionalComponent}
    />
  );
};

export default Login;
