import React from "react";
import {
  Autocomplete,
  InputLabel,
  TextField,
  Checkbox,
  Chip,
} from "@mui/material";
import "../MuiTextField/Style.css";

const MuiMultiSelectDropdown = ({
  value,
  options,
  onChange,
  label,
  placeholder,
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
        multiple
        id={`${name}-autocomplete`}
        value={value}
        size="small"
        onChange={(event, newValue) => {
          onChange({
            target: {
              name: name,
              value: newValue,
            },
          });
        }}
        options={options}
        disableCloseOnSelect
        getOptionLabel={(option) => option}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox style={{ marginRight: 8 }} checked={selected} />
            {option}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            variant="standard"
            size="small"
            className={className ? className : "arimo-input-label"}
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
        renderTags={(selected, getTagProps) => selected.join(", ")}
      />
    </>
  );
};

export default MuiMultiSelectDropdown;
