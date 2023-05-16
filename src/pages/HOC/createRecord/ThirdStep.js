import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const ThirdStep = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Safe Pass Database
      </Typography>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="observationDate"
          name="observationDate"
          label="Observation Date"
          fullWidth
          autoComplete="given-name"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="observationTime"
          name="observationTime"
          label="Observation Time"
          fullWidth
          autoComplete="family-name"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="dayNight"
          name="dayNight"
          label="Day / Night"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
        />
      </Grid>
    </React.Fragment>
  );
};

export default ThirdStep;
