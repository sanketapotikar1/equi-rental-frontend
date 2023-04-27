import React, { useState } from "react";
import Button from "@mui/material/Button";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "../App.css";
import { Box } from "@mui/system";

export function CartProducts({
  List,
  cartList,
  index,
  finalPrice,
  setFinalPrice,
  priceList,
}) {
  const [Quantity, setQuantity] = useState(1);
  // setFinalPrice(finalPrice);

  let increment = () => {
    setQuantity(Quantity < 10 ? Quantity + 1 : Quantity);


  };

  let decrement = () => {
    setQuantity(Quantity > 1 ? Quantity - 1 : Quantity);

  };

  let Price = Quantity * List.price;

  // console.log(Price);

  priceList(Price, index);

  // let removeByAttr = function (arr, attr, value) {
  //   let i = arr.length;
  //   while (i--) {
  //     if (
  //       arr[i] &&
  //       arr[i].hasOwnProperty(attr) &&
  //       arguments.length > 2 &&
  //       arr[i][attr] === value
  //     ) {
  //       arr.splice(i, 1);
  //     }
  //   }
  //   return arr;
  // };

  // function removeproduct() {
  //   const { pname } = List;

  //   removeByAttr(cartList, "pname", pname);

  //   console.log(cartList);

  // }

  // const removeCart = () => {
  //   removeproduct();
  //   setCartList(cartList);
  // };

  return (
    <>
      <div
        className="cart-box"
        style={{
          height: "125px",
        }}
      >
        <div className="cart-div" style={{ width: "20%" }}>
          <img src={List.picture} alt="product" className="crt-prd-img"></img>
        </div>
        <div
          className="cart-div center"
          style={{ width: "30%", fontWeight: "500" }}
        >
          <Box className="center">{List.pname} </Box>
        </div>
        <div
          style={{ width: "30%", display: "flex", marginTop: "0px" }}
          className="cart-div"
        >
          <div
            style={{ width: "20%", marginRight: "30px", textAlign: "center" }}
          >
            <Button
              onClick={increment}
              style={{
                background: "#2E3B55",
                padding: "7px",
                justifyItem: "center",
                boxShadow: "2px 5px 5px grey",
              }}
              variant="contained"
            >
              <AddIcon />
            </Button>
          </div>
          <TextField
            style={{ width: "30%" }}
            id="standard-number"
            label="Quatity"
            value={Quantity}
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
          <div style={{ width: "20%", marginLeft: "30px" }}>
            <Button
              onClick={decrement}
              style={{
                background: "#2E3B55",
                padding: "7px",
                justifyItem: "center",
                boxShadow: "2px 5px 5px grey",
              }}
              variant="contained"
            >
              <RemoveIcon className="center" />
            </Button>
          </div>
        </div>
        <div
          style={{ fontWeight: "500", width: "20%" }}
          className="cart-div center"
        >
          <Box className="center">
            <CurrencyRupeeIcon style={{ fontSize: "20px" }} />
            <Box style={{ fontSize: "18px" }}>{Quantity * List.price}/</Box>
            <Box class="period">day</Box>
          </Box>
        </div>

        {/* <div style={{ width: "10%" }} className="cart-div center">
          <Button
            className="center"
            style={{ background: "#2E3B55" }}
            variant="contained"
            onClick={removeCart}
          >
            <DeleteIcon />
            Remove
          </Button>
        </div> */}
      </div>
    </>
  );
}
