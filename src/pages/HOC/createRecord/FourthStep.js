import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FirstStep from "./FirstStep";

export default function FourthStep() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Safe Pass Database
      </Typography>

      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="climateType"
          name="climateType"
          label="Climate Type"
          fullWidth
          autoComplete="given-name"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="observationRoad"
          name="observationRoad"
          label="Observation Road"
          fullWidth
          autoComplete="family-name"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="roadCondition"
          name="roadCondition"
          label="Road Condition"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="trafficType"
          name="trafficType"
          label="Traffic Type"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
        />
      </Grid>
    </React.Fragment>
  );
}
