import { Box, CardActions, FormHelperText, Grid } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
import { MuiTextField } from "../../MuiComponents/MuiTextField/Index";
import AuthPage from "./AuthPage";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isItEmail, setIsItEmail] = useState(true);

  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const onChangeNumber = (event) => {
    event.preventDefault();
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/resetPassword");
  };

  const form = (
    <form onSubmit={handleSubmit}>
      {isItEmail ? (
        <MuiTextField
          name="email"
          type="text"
          value={email}
          label="Email"
          onChange={onChangeEmail}
        />
      ) : (
        <MuiTextField
          name="number"
          type="text"
          value={number}
          label="Number"
          onChange={onChangeNumber}
        />
      )}

      <FormHelperText
        className="arimo-input-label helperText"
        onClick={() => setIsItEmail(!isItEmail)}
      >
        {isItEmail ? "Use number instead" : "Use email instead"}
      </FormHelperText>

      <Grid className="flex-and-center">
        <MuiContainedButton
          type="submit"
          buttonText="Send Reset Link"
          width={true}
        />
      </Grid>
    </form>
  );

  return (
    <AuthPage
      form={form}
      heading={"Reset Password"}
      cardActionLinkText={"Go Back to Log In"}
      cardActionLinkTo={"login"}
    />
  );
};

export default ForgotPassword;
