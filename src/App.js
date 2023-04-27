import { Routes, Route, useNavigate } from "react-router-dom";
import "./Components/App.css";

import Home from "./Components/Home";
import Header from "./Components/Navbar/Header";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import PasswordReset from "./Components/Auth/PasswordReset";
import Product from "./Components/Products/Product";
import AddProduct from "./Components/Products/AddProducts";
import Cart from "./Components/Cart/Cart";
import CustomerDetails from "./Components/Payment/CustomerDetails";
import Payment from "./Components/Payment/Payment";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Error from "./Components/Error";
import FAQ from "./Components/Navbar/FAQ";
import AboutUs from "./Components/Navbar/AboutUs";
import ContactUs from "./Components/Navbar/ContactUs";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./Components/ContextProvider/Context";

function App() {
  const [cartList, setCartList] = useState([]);

  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext);

  const Navigate = useNavigate();

  const ValidUser = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("https://equipment-rental.onrender.com/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await res.json();

    if (data.status == 401 || !data) {
      console.log("user not valid");
    } else {
      console.log("user verify", data);
      setLoginData(data);
      // Navigate("/products");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      ValidUser();
      setData(true);
    }, 1500);
  }, []);

  return (
    <div className="App">
      {data ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/products"
              element={
                <Product cartList={cartList} setCartList={setCartList} />
              }
            />
            <Route path="/addproducts" element={<AddProduct />} />
            <Route
              path="/cart"
              element={<Cart cartList={cartList} setCartList={setCartList} />}
            />
            <Route path="/payment/:total" element={<Payment />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route
              path="/CustomerDetails/:total"
              element={<CustomerDetails />}
            />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route
              path="/forgotpassword/:id/:token"
              element={<ForgotPassword />}
            />

            {/* <Route path="*" element={<Error />} /> */}
          </Routes>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}

export default App;
