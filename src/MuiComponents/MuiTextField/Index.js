import { TextField, InputLabel } from "@mui/material";
import React from "react";
import "../../Screens/Auth/Style.css";
import "./Style.css";

export const MuiTextField = ({
  type,
  value,
  onChange,
  className,
  placeholder,
  defaultValue,
  label,
  required,
  rows,
}) => {
  const isControlled = value !== undefined;

  return (
    <>
      <InputLabel className={className ? className : "arimo-input-label"}>
        {label}
        {required && <span style={{ color: "red" }}> *</span>}
      </InputLabel>

      <TextField
        name={value}
        type={type}
        placeholder={placeholder ? placeholder : label}
        variant="standard"
        value={isControlled ? value : undefined} // Controlled value
        defaultValue={!isControlled ? defaultValue : undefined} // Uncontrolled defaultValue
        onChange={onChange}
        multiline={rows ? true : false}
        rows={rows}
        className={className ? className : "arimo-input-label"}
        size="small"
        fullWidth
        required
        InputProps={{
          classes: {
            input: "centered-input",
          },
        }}
        InputLabelProps={{
          className: "centered-placeholder",
        }}
      />
    </>
  );
};
