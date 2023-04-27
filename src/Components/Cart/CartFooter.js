import React from "react";
import Box from "@mui/material/Box";
import { RentingDate } from "./RentingDate";
import { CartTotal } from "./CartTotal";

export function CartFooter({ finalPrice, subtotal}) {
  console.log(subtotal,"cartfooter - subtotal");

  const [days, setDays] = React.useState(1);

  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <hr></hr>
        <Box style={{ display: "flex", marginTop: "20px" }}>
          <Box style={{ width: "50%" }}>
            <RentingDate days={days} setDays={setDays} />
          </Box>
          <Box style={{ width: "50%" }}>
            <CartTotal finalPrice={finalPrice} subtotal={subtotal} days={days}/>
          </Box>
        </Box>
      </div>
    </>
  );
}
