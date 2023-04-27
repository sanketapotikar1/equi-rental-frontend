import { Box } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function CustomerDetails() {
  let { total } = useParams();

  const Navigate = useNavigate();

  const formvalidationSchema = yup.object({
    name: yup
      .string()
      .required("Please enter the your name")
      .min(3, " Please give bigger name"),
    email: yup
      .string()
      .min(8, "email is too short")
      .max(25, "too long")
      .required("Required"),
    pincode: yup.number().required("Please enter your pincode"),

    mobile: yup
      .string()
      .required("Please enter your mobile number")
      .min(10, "Please enter 10 digit phone number")
      .max(10, "Please enter 10 digit phone number"),
    city: yup
      .string()
      .required("Please enter your address")
      .min(3, "please enter your address in more detail")
      .max(50, "please keep your address short"),
    address1: yup
      .string()
      .required("Please enter your address")
      .min(3, "please enter your address in more detail")
      .max(50, "please keep your address short"),
    address2: yup
      .string()
      .required("please enter this decription")
      .min(10, "please enter your address in more detail")
      .max(150, "please keep your address short"),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        pincode: "",
        mobile: "",
        city: "",
        address1: "",
        address2: "",
      },
      validationSchema: formvalidationSchema,
      onSubmit: (newdata) => {
        console.log("onSubmit", newdata);
        Navigate(`/payment/${total}`);
        // addinpdata(newdata);
      },
    });

  return (
    <Box>
      <Box style={{ display: "block" }} className="cart-block ">
        <h2
          style={{
            marginLeft: "150px",
            textAlign: "left",
            marginRight: "120px",
            padding:"20px"
          }}
        >
          Customer Details
          <hr></hr>
        </h2>

        <p className="slogan">
          Please fill your details to get your products at your doorstep. 😊
        </p>

        <Box>
          <form
            style={{ marginTop: "-30px" }}
            onSubmit={handleSubmit}
            className="Add-data-form"
          >
            <TextField
              label="Name"
              variant="filled"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.name && errors.name ? errors.name : ""}
              error={touched.name && errors.name ? true : false}
            />

            <TextField
              label="Email"
              variant="filled"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.email && errors.email ? errors.email : ""}
              error={touched.email && errors.email ? true : false}
            />

            <TextField
              label="Mobile"
              variant="filled"
              name="mobile"
              value={values.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.mobile && errors.mobile ? errors.mobile : ""}
              error={touched.mobile && errors.mobile ? true : false}
            />

            <TextField
              label="Pincode"
              variant="filled"
              name="pincode"
              value={values.pincode}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                touched.pincode && errors.pincode ? errors.pincode : ""
              }
              error={touched.pincode && errors.pincode ? true : false}
            />

            <TextField
              label="Town/City"
              variant="filled"
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.city && errors.city ? errors.city : ""}
              error={touched.city && errors.city ? true : false}
            />

            <TextField
              label="Area, Street, Sector, Village"
              variant="filled"
              name="address1"
              value={values.address1}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                touched.address1 && errors.address1 ? errors.address1 : ""
              }
              error={touched.address1 && errors.address1 ? true : false}
            />

            <TextField
              multiline
              rows={4}
              label="Flat, House no., Building, Company, Apartment, landMark(optional)"
              variant="filled"
              name="address2"
              value={values.address2}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                touched.address2 && errors.address2 ? errors.address2 : ""
              }
              error={touched.address2 && errors.address2 ? true : false}
            />

            <Button
              style={{ marginTop: "30px", background: "#2E3B55" }}
              type="submit"
              variant="contained"
              color="success"
            >
              Procceed to Payment
            </Button>
            {/* <p className="slogan" style={{ marginTop: "30px" }}>
              Thank you 😇 choosing our Portal to rent products that you need.
              Hope you will find joy 🤗 by using it.
            </p> */}
          </form>
        </Box>
      </Box>
    </Box>
  );
}
