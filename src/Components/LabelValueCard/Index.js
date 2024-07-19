import { Grid, TextField, InputLabel } from "@mui/material";
import React from "react";
import "./Style.css";

const LabelValueCard = ({ label, value, onChange, disabled }) => (
  <Grid item container direction="column" className="label-value-grid">
    <Grid item>
      <InputLabel className="label">{label}</InputLabel>
    </Grid>
    <Grid item>
      <TextField
        className="value"
        defaultValue={value}
        onChange={onChange}
        variant="standard"
        fullWidth
        disabled={disabled}
      />
    </Grid>
  </Grid>
);

export default LabelValueCard;
