import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../ContextProvider/Context";
import "../App.css";
import { SearchBar } from "./SearchBar";
import { ProductCard } from "./ProductCard";
import { Login } from "@mui/icons-material";

function Product({ cartList, setCartList }) {
  // const product_info = [
  //   {
  //     Product_name: "Headphone",
  //     Price: "$40.00 - $80.00",
  //     Product_picture:
  //       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
  //   },
  //   {
  //     Product_name: "Nike Shoe",
  //     Price: "$120.00 - $280.00",
  //     Product_picture:
  //       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //   },
  //   {
  //     Product_name: "Smart Watch",
  //     Price: "$400.00 - $480.00",
  //     Product_picture:
  //       "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   },
  //   {
  //     Product_name: "Headphone",
  //     Price: "$400.00 - $480.00",
  //     Product_picture:
  //       "https://images.unsplash.com/photo-1612858250434-b5358e2b3625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHMlMjBhbmQlMjBicmFuZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //   },
  //   {
  //     Product_name: "Earbud",
  //     Price: "$400.00 - $480.00",
  //     Product_picture:
  //       "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  //   },
  //   {
  //     Product_name: "goggles",
  //     Price: "$400.00 - $480.00",
  //     Product_picture:
  //       "https://images.unsplash.com/photo-1587466280419-78d7adc6d4a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   },
  //   {
  //     Product_name: "Analog Watch",
  //     Price: "$400.00 - $480.00",
  //     Product_picture:
  //       "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  //   },
  //   {
  //     Product_name: "perfume",
  //     Price: "$400.00 - $480.00",
  //     Product_picture:
  //       "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  //   },
  // ];

  const [productList, setProductList] = useState([]);

  const [productCount, setProductCount] = useState(0);

  const { logindata, setLoginData } = useContext(LoginContext);

  const [data, setData] = useState(false);

  let [userID, setuserID] = useState();

  console.log(logindata);

  // Validate API

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
      console.log("user verified ");

      setLoginData(data);
    }
  };

  useEffect(() => {
    ValidUser();
    setData(true);
  }, []);

  // Validate Product API

  const getdata = async () => {
    const res = await fetch("https://equipment-rental.onrender.com/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error in product list ");
    } else {
      setProductList(data.products);
      console.log("product list recived");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  // // CartList API

  // const cartlist = async () => {
  //   console.log(logindata);

  //   if (logindata) {
  //     let { _id } = logindata.User;
  //     setuserID(_id);
  //   }
  //   console.log(userID);

  // //  let userID = "6436c9de8dc8e0b07e6e44c2"

  //   const res = await fetch(`https://equipment-rental.onrender.com/cartlist/${userID}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   const data = await res.json();
  //   console.log(data);

  //   console.log("cart list revived");
  // };

  // // cartlist();

  // useEffect(() => {
  //   setTimeout(() => {
  //     cartlist();
  //   }, 1000);
  // }, []);

  return (
    <>
      <SearchBar
        cartList={cartList}
        productList={productList}
        setProductList={setProductList}
      />

      <div className="product-list">
        {productList.map((productList,index) => (
          <ProductCard
            productList={productList}
            productCount={productCount}
            setProductCount={setProductCount}
            cartList={cartList}
            setCartList={setCartList}
          />
        ))}
      </div>
    </>
  );
}

export default Product;
