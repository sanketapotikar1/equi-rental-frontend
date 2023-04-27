import React, { useState } from "react";
import { CartHeader } from "./CartHeader";
import "../App.css";
import { CartProducts } from "./CartProducts";
import { CartFooter } from "./CartFooter";

function Cart({ cartList, setCartList }) {
  // console.log(cartList, setCartList);

  const [finalPrice, setFinalPrice] = useState([]);

  let [subtotal, setsubtotal] = useState(0);

  // callback function to take data from child component to parent component

  const priceList = (price, index) => {
    finalPrice[index] = price;
    console.log(finalPrice, `cart-18`);
    total(finalPrice);

    setFinalPrice(finalPrice);
  };

  function total(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    console.log(sum, `sum`);
    setsubtotal(sum);
  }

  console.log(subtotal, ` cart list `);

  // useEffect(() => {
  //   console.log(`rerender the componet`);
  // }, [setsubtotal]);

  // console.log(finalPrice, `cart-20`);

  return (
    <div style={{ display: "block" }} className="cart-block">
      <h2 style={{ marginLeft: "20px", textAlign: "left", padding: "20px" }}>
        Your shopping Cart
      </h2>
      <CartHeader />
      {cartList.map((List, index) => (
        <CartProducts
          List={List}
          index={index}
          cartList={cartList}
          finalPrice={finalPrice}
          setFinalPrice={setFinalPrice}
          priceList={priceList}
        />
      ))}

      <CartFooter finalPrice={finalPrice} subtotal={subtotal} />
    </div>
  );
}

export default Cart;
