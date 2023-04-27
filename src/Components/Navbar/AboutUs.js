import React from "react";
import "./aboutus.css";
import { Button } from "@mui/material";

function AboutUs() {
  return (
    <>
      <div class="container">
        <h1 class="line">About Us</h1>
        <p id="content">
          We are in Renting business since 2015 and we belive that Rent Anything From Anyone
        </p>
        <div class="section">
          <img src="Images/aboutus.jpg" class="Image" />
          <div class="first-section">
            <h3>Rent what you like !!!</h3>
            <p class="first-section-content">
              Equipment Rental has established itself as one of the leading
              full-service film equipment rental stores in India. From
              their homepage, it is immediately noticeable that they offer a
              great range of equipment with a mix of new and popular products.
              Thanks to categorization, customers can find camera gear, lenses,
              and accessories in a few clicks.
            </p>
            <Button style={{color:"black"}} type="button">Read More</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
