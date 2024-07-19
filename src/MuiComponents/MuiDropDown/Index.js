import React from "react";
import { Autocomplete, InputLabel, TextField } from "@mui/material";
import "../MuiTextField/Style.css";

export const MuiDropDown = ({
  value,
  onChange,
  options,
  label,
  defaultValue,
  className,
  required,
}) => {
  const name = value;
  return (
    <>
      <InputLabel className={className ? className : "arimo-input-label"}>
        {label}
        {required && <span style={{ color: "red" }}> *</span>}
      </InputLabel>
      <Autocomplete
        id={`${name}-autocomplete`}
        value={value}
        size="small"
        defaultValue={defaultValue}
        onChange={(event, newValue) => {
          onChange({
            target: {
              name: name,
              value: newValue,
            },
          });
        }}
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={label}
            variant="standard"
            size="small"
            className={className ? className : "arimo-input-label"}
            // InputProps={{
            //   ...params.InputProps,
            //   style: { paddingLeft: "10px" },
            // }}
            // InputLabelProps={{
            //   style: { paddingLeft: "10px" },
            // }}
            InputProps={{
              ...params.InputProps,
              classes: {
                input: "centered-input",
              },
            }}
            InputLabelProps={{
              className: "centered-placeholder",
            }}
          />
        )}
      />
    </>
  );
};
