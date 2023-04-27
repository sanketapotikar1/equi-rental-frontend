import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AddProducts() {
  const Navigate = useNavigate();

  const addProduct = (newProduct) => {
    console.log(`addproduct triggred`);
    fetch(`https://equipment-rental.onrender.com/addproducts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    }).then(() => Navigate("/products"));
  };

  const formvalidationSchema = yup.object({
    pname: yup
      .string()
      .required("Please enter the product name")
      .min(3, " Please give bigger name"),

    price: yup
      .number()
      .required("please enter the price of product")
      .min(0)
      .max(10000),

    picture: yup
      .string()
      .required("Please enter your Image URL")
      .min(3, "please enter your Image URL longer"),

    description: yup
      .string()
      .required("please enter this product decription")
      .min(10, "please enter your decription in more detail")
      .max(350, "please keep your decription short"),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        pname: "",
        price: "",
        picture: "",
        description: "",
      },
      validationSchema: formvalidationSchema,
      onSubmit: (newProduct) => {
        // console.log(`data added`, newProduct);
        addProduct(newProduct);
      },
    });

  return (
    <>
      <Box>
        <Box style={{ marginTop: "30px", padding: "20px" }}>
          <h4>Please fill the below details to add new Product</h4>
        </Box>
        <form onSubmit={handleSubmit} className="Add-data-form">
          <TextField
            label="Product Name"
            variant="filled"
            name="pname"
            value={values.pname}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.pname && errors.pname ? errors.pname : ""}
            error={touched.pname && errors.pname ? true : false}
          />

          <TextField
            label="Product Price"
            variant="filled"
            name="price"
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.price && errors.price ? errors.price : ""}
            error={touched.price && errors.price ? true : false}
          />

          <TextField
            label="Product Image"
            variant="filled"
            name="picture"
            value={values.picture}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.picture && errors.picture ? errors.picture : ""}
            error={touched.picture && errors.picture ? true : false}
          />

          <TextField
            label="Product description"
            variant="filled"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={
              touched.description && errors.description
                ? errors.description
                : ""
            }
            error={touched.description && errors.description ? true : false}
          />

          <Button
            style={{ marginTop: "30px", background: "#2E3B55" }}
            type="submit"
            variant="contained"
            color="success"
          >
            Add New Product
          </Button>
        </form>
      </Box>
    </>
  );
}

export default AddProducts;
