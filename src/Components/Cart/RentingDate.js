import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Box, Button } from "@mui/material";

export function RentingDate({days, setDays}) {
  const [startValue, setStartValue] = React.useState(null);
  const [endValue, setEndValue] = React.useState(null);
  // const [days, setDays] = React.useState(1);

  // console.log(startValue, endValue);

  function checkCount() {

    // console.log(startValue, endValue);
    let dayCount = (endValue - startValue) / 1000 / 60 / 60 / 24;
    // console.log(dayCount);

    dayCount > 0
      ? setDays(dayCount)
      : alert("Incorrect Date : Start Date should be less than End Date");
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <Box style={{ display: "grid", width: "100%" }}>
          <Box style={{ display: "flex", justifyContent: "space-around" }}>
            <DatePicker
              label="Start Date"
              value={startValue}
              onChange={(newValue) => {
                setStartValue(newValue);
              }}
            />
            <DatePicker
              label="End Date"
              value={endValue}
              onChange={(newValue) => {
                setEndValue(newValue);
              }}
            />
          </Box>
          <Box style={{ display: "grid" }}>
            <Button
              variant="contained"
              style={{
                width: "85%",
                margin: "auto",
                marginTop: "30px",
                background: "#2E3B55",
                boxShadow: "2px 5px 5px grey",
              }}
              onClick={checkCount}
            >
              confirm Date
            </Button>
            <TextField
              style={{
                width: "40%",
                margin: "auto",
                marginTop: "30px",
                marginBottom: "20px",
                boxShadow: "2px 5px 5px grey",
              }}
              id="outlined-read-only-input"
              label="number of days"
              value={days}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Box>
        </Box>
      </DemoContainer>
    </LocalizationProvider>
  );
}
