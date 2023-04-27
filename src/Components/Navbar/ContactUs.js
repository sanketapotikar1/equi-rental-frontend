import { Box, Button, TextField } from "@mui/material";
import React from "react";

function ContactUs() {

    const formStyle = {
        display : "grid",
        width : "100%",
        marginTop: "25px",
        gap:"25px"
    }
  return (
    <>
      <div class="container">
        <h1 class="line">Contact Us</h1>
        <p id="content">
          We are in Renting business since 2015 and we belive that Rent Anything
          From Anyone
        </p>
        <div class="section">
          <img src="Images/contactus.jpg" class="Image" />
          <div class="first-section">
            <h3>Send us Message !!!</h3>
            <Box style={formStyle}>
              <TextField label="Name" variant="standard" name="name" />

              <TextField label="Email" variant="standard" name="email" />

              <TextField label="Mobile" variant="standard" name="mobile" />
            </Box>

            <Button
              variant="contained"
              style={{ backgroundColor: "#2E3B55", marginTop:"30px" }}
              type="button"
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
