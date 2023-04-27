import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export function CartTotal({finalPrice, subtotal ,days}) {

  const Navigate = useNavigate();

  console.log(finalPrice, `cartTotal - 8`);

  // let subtotal = 0;


  return (
    <>
      <Box
        className="flex"
        style={{
          // border: "1px solid black",
          height: "130px",
          float: "right",
          width: "100%",
        }}
      >
        <Box sx={{ width: "50%", marginTop: "5px" }}>
          <Box style={{ padding: "3px", textAlign: "left", marginLeft: "20%" }}>
            Subtotal
          </Box>
          <Box style={{ padding: "3px", textAlign: "left", marginLeft: "20%" }}>
            Shipping
          </Box>
          <Box style={{ padding: "3px", textAlign: "left", marginLeft: "20%" }}>
            No. of Days
          </Box>
          <hr></hr>
          <Box style={{ padding: "3px", textAlign: "left", marginLeft: "20%" }}>
            Total amount(Incl. taxes)
          </Box>
        </Box>
        <Box sx={{ width: "50%", marginTop: "5px" }}>
          <Box
            style={{ padding: "3px", textAlign: "Right", marginRight: "20%" }}
          >
            {subtotal}
            .00/-
          </Box>
          <Box
            style={{ padding: "3px", textAlign: "Right", marginRight: "20%" }}
          >
            {" "}
            00.00 (Free)
          </Box>
          <Box
            style={{ padding: "3px", textAlign: "Right", marginRight: "20%" }}
          >
            {days} Day
          </Box>
          <hr></hr>
          <Box
            style={{ padding: "3px", textAlign: "Right", marginRight: "20%" }}
          >
            {subtotal*days}.00/-
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Button
          onClick={() => {
            Navigate(`/CustomerDetails/${subtotal*days}`);
          }}
          style={{ width: "80%", background: "#2E3B55",marginTop:"40px",boxShadow: "2px 5px 5px grey" }}
          variant="contained"
        >
          GO To Checkout
        </Button>
      </Box>
    </>
  );
}
