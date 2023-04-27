import React from "react";

import axios from "axios";
import { Box, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import "./payment.css";
function Payment() {
  let { total } = useParams();

  const handleOpenRazorpay = (data) => {
    const options = {
      key: "rzp_test_REhVavqqHmIlnX",
      amount: Number(data.amount),
      currency: data.currency,
      order_id: data.id,
      name: " Equipment Rental", //
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/a-logo-design%7C-company-logo-template-7246ba946d6686a9a5b984a1e4380b1b_screen.jpg?ts=1665828706",
      description: "Prouduct rented on Equipment Rental", //
      handler: function (response) {
        console.log(response, "34");
        axios
          .post("http://localhost:8000/verify", { response: response })
          .then((res) => {
            console.log(res, "37");
            // your orders
          })
          .catch((err) => {
            console.log(err);
          });
      },
      prefill: {
        name: "kishor Kumar", //your customer's name
        email: "kishor.kumar@example.com",
        contact: "0000000000",
      },
      notes: {
        address: "Equpment Rental Corporate Office",
      },
      theme: {
        color: "#2E3B55",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handlePayment = (amount) => {
    const _data = { amount: amount };
    axios
      .post("http://localhost:8000/orders", _data)
      .then((res) => {
        console.log(res.data, "29");
        handleOpenRazorpay(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const myStyle = {
    // backgroundImage: "url(./Images/payment1.jpg)",
    // backgroundImage : "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // opacity: "0.9",

    color: "black",
  };

  return (
    <div className="all" style={myStyle}>
      <Box>
        <p className="header">
          You now one step away from from your favourite product ❤.
        </p>

        <p className="bill">Your Total Bill : {total}/-</p>

        <Button
          style={{
            backgroundColor: "#2e3b55",
            padding: "15px",
            marginTop:"15px",
            width: "30%",
            color: "white",
          }}
          onClick={() => handlePayment(total)}
        >
          click here to pay now
        </Button>
      </Box>

      <p className="slogan" style={{ marginTop: "30px", padding: "20px" }}>
        Thank you 😇 choosing our Portal to rent products that you need. Hope
        you will find joy 🤗 by using it.
      </p>

      <Box className="image"></Box>


    </div>
  );
}

export default Payment;
