import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import "./Style.css";

const ProfileCardObject = ({ label, value, name, editMode, handleChange }) => {
  return (
    <Grid container alignItems="center">
      <Grid item md={6}>
        <Typography className="object-title">{label}:</Typography>
      </Grid>
      <Grid item md={6}>
        {editMode ? (
          <TextField
            variant="standard"
            size="small"
            className="object-value"
            name={name}
            value={value}
            onChange={handleChange}
            InputProps={{
              classes: {
                input: "object-value",
              },
            }}
          />
        ) : (
          <Typography className="object-value">{value}</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default ProfileCardObject;
