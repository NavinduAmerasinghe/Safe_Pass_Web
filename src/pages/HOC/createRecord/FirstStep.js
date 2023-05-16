import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, MenuItem, Select } from "@mui/material";
import { animalNames, taxonGroups } from "./DropDownValues";
import InputLabel from "@mui/material/InputLabel";

export default function FirstStep({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Safe Pass Database
      </Typography>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="animalName"
            name="animalName"
            label="Animal Name"
            varient="standard"
            value={formData.animalName || ""}
            onChange={handleChange}
          >
            <MenuItem value="">Select Animal Name</MenuItem>
            {animalNames.map((animal) => (
              <MenuItem key={animal.value} value={animal.value}>
                {animal.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          type="file"
          id="image"
          name="image"
          label="Image"
          fullWidth
          autoComplete="family-name"
          variant="standard"
          //value={formData.image}
          //onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="taxonGroup"
          name="taxonGroup"
          label="Taxon Group"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
          // value={formData.taxonGroup}
          //onChange={formData.taxonGroup}
        />
      </Grid>
    </React.Fragment>
  );
}
