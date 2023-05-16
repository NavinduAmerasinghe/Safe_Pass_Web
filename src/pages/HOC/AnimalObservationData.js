import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  makeStyles,
} from "@material-ui/core";
import XLSX from "xlsx";
import Widget from "../../component/WidgetCard";
import Grid from "@mui/material/Grid";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const EXTENSIONS = ["xlsx", "xls", "csv"];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  tabele: {
    minWidth: 650,
  },
  fixedColumn: {
    position: "sticky",
    left: 0,
    zIndex: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const AnimalObservationData = () => {
  const [dbData, setDbData] = useState([]);
  const [sortOrder, setSortOrder] = useState("newestToOldest");
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("/api/observations")
      .then((res) => {
        setDbData(res.data);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  }, []);

  // useEffect(() => {
  //   let sortedData;
  //   if (sortOrder === "newestToOldest") {
  //     sortedData = [...dbData].sort(
  //       (a, b) => new Date(b.observationDate) - new Date(a.observationDate)
  //     );
  //   } else if (sortOrder === "oldestToNewest") {
  //     sortedData = [...dbData].sort(
  //       (a, b) => new Date(a.observationDate) - new Date(b.observationDate)
  //     );
  //   }
  //   setDbData(sortedData);
  // }, [sortOrder]);

  const handleSortOrderChange = (col) => {
    if (sortOrder === "newestToOldest") {
      const sortedData = [...dbData].sort(
        (a, b) => new Date(b.observationDate) - new Date(a.observationDate)
        // (a, b) => (a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1)
      );
      setDbData(sortedData);
      setSortOrder("oldestToNewest");
    }
    if (sortOrder === "oldestToNewest") {
      const sortedData = [...dbData].sort(
        (a, b) => new Date(a.observationDate) - new Date(b.observationDate)
        // (a, b) => (a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1)
      );
      setDbData(sortedData);
      setSortOrder("newestToOldest");
    }
  };

  const [colDefs, setColDefs] = useState();
  const [data, setData] = useState();

  const getExention = (file) => {
    const parts = file.name.split(".");
    const extension = parts[parts.length - 1];
    return EXTENSIONS.includes(extension); // return boolean
  };

  const convertToJson = (headers, data) => {
    const rows = [];
    data.forEach((row) => {
      let rowData = {};
      row.forEach((element, index) => {
        rowData[headers[index]] = element;
      });
      rows.push(rowData);
    });
    return rows;
  };

  const importExcel = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      //parse data

      const bstr = event.target.result;
      const workBook = XLSX.read(bstr, { type: "binary" });

      //get first sheet
      const workSheetName = workBook.SheetNames[0];
      const workSheet = workBook.Sheets[workSheetName];
      //convert to array
      const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
      // console.log(fileData)
      const headers = fileData[0];
      const heads = headers.map((head) => ({ title: head, field: head }));
      setColDefs(heads);

      //removing header
      fileData.splice(0, 1);

      setData(convertToJson(headers, fileData));
    };

    if (file) {
      if (getExention(file)) {
        reader.readAsBinaryString(file);
      } else {
        alert("Invalid file input, Select Excel, CSV file");
      }
    } else {
      setData([]);
      setColDefs([]);
    }
  };
  return (
    <div>
      <h2
        align="center"
        style={{
          color: "#dfe6e9",
          fontFamily: "Arial, sans-serif",
          // ... other styles
        }}
      >
        Safe-Pass Database{" "}
      </h2>

      {/* Recent Deposits */}
      <Grid container spacing={2} style={{ marginBottom: 40 }}>
        <Grid item xs={4}>
          <Paper
            sx={{ p: 2, height: 240 }}
            style={{ width: 200, marginLeft: 100 }}
          >
            <Widget name="Total Entries :" />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            sx={{ p: 2, height: 240 }}
            style={{ width: 200, marginLeft: 50 }}
          >
            <Widget name="From :           To:" />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ p: 2, height: 240 }} style={{ width: 200 }}>
            <Widget name="Users :" />
          </Paper>
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <input
          type="file"
          onChange={importExcel}
          style={{
            padding: "8px 12px",
            backgroundColor: "#f2f2f2",
            marginTop: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            color: "#333",
            fontFamily: "Arial, sans-serif",
            fontSize: "14px",
            // ... other styles
          }}
        />
        {/* Sorting Buttons */}

        {sortOrder === "newestToOldest" ? (
          <button
            style={{
              padding: "8px 12px",
              backgroundColor: "#f2f2f2",
              marginLeft: "55%",
              marginTop: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              color: "#333",
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
              // ... other styles
            }}
            onClick={() => handleSortOrderChange("oldestToNewest")}
          >
            Oldest to Newest
            <KeyboardDoubleArrowUpIcon />
          </button>
        ) : (
          <button
            style={{
              padding: "8px 12px",
              backgroundColor: "#f2f2f2",
              marginTop: "10px",
              marginLeft: "55%",
              border: "1px solid #ccc",
              borderRadius: "4px",
              color: "#333",
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
              // ... other styles
            }}
            sonClick={() => handleSortOrderChange()}
          >
            Newest to Oldest <KeyboardDoubleArrowDownIcon />
          </button>
        )}
      </div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell
                className={classes.fixedColumn}
                onClick={() => handleSortOrderChange("animalName")}
              >
                Animal Name
              </TableCell>
              <TableCell className={classes.fixedColumn}>Image</TableCell>
              <TableCell className={classes.fixedColumn}>Taxon Group</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Observation Date</TableCell>
              <TableCell>Observation Time</TableCell>
              <TableCell>Day/Night</TableCell>
              <TableCell>Climate Type</TableCell>
              <TableCell>Observation Road</TableCell>
              <TableCell>Road Condition</TableCell>
              <TableCell>Traffic Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dbData &&
              dbData?.map((row) => (
                <TableRow key={row._id}>
                  <TableCell className={classes.fixedColumn}>
                    {row.animalName}
                  </TableCell>
                  <TableCell className={classes.fixedColumn}>
                    <img
                      src={row.image}
                      alt="Animal"
                      style={{ height: "30px", width: "30px" }}
                    />
                  </TableCell>
                  <TableCell className={classes.fixedColumn}>
                    {row.taxonGroup}
                  </TableCell>
                  <TableCell>
                    {`${row.location.coordinates[1]}, ${row.location.coordinates[0]}`}
                  </TableCell>
                  <TableCell>{row.observationDate}</TableCell>
                  <TableCell>{row.observationTime}</TableCell>
                  <TableCell>{row.dayNight}</TableCell>
                  <TableCell>{row.climateType}</TableCell>
                  <TableCell>{row.observationRoad}</TableCell>
                  <TableCell>{row.roadCondition}</TableCell>
                  <TableCell>{row.trafficType}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default AnimalObservationData;
