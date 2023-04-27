import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../ContextProvider/Context";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import "../App.css";

export function ProductCard({
  productList,
  productCount,
  setProductCount,
  cartList,
  setCartList,
}) {
  const [toggle, setToggle] = useState(true);

  const { logindata, setLoginData } = useContext(LoginContext);

  let found = cartList.find((product) => product.pname === productList.pname);

  let removeByAttr = function (arr, attr, value) {
    let i = arr.length;
    while (i--) {
      if (
        arr[i] &&
        arr[i].hasOwnProperty(attr) &&
        arguments.length > 2 &&
        arr[i][attr] === value
      ) {
        arr.splice(i, 1);
      }
    }
    return arr;
  };

  function addproduct() {
    cartList.push(productList);
    setCartList(cartList);
  }

  function removeproduct() {
    
    const { pname } = productList;

    removeByAttr(cartList, "pname", pname);

    setCartList(cartList);
  }

  const addToCart = () => {
    console.log(cartList);

    toggle
      ? setProductCount(productCount + 1)
      : setProductCount(productCount - 1);

    !found ? addproduct() : removeproduct();

    setToggle(!toggle);
  };

  const addCartStyle = {
    width: "100%",
    justifyContent: "center",
    background: !found ? "#2E3B55" : "grey",
  };

  return (
    <>
      <Card
        style={{
          marginTop: "0px",
          marginLeft: "15px",
          height: "min-content",
          width: "345px",
        }}
      >
        <CardMedia
          component="img"
          alt="Headphone"
          height="250"
          image={productList.picture}
        />

        <CardContent style={{ margin: "5px" }}>
          <Typography gutterBottom variant="h5" component="div">
            {productList.pname}
          </Typography>
          <Typography>{productList.price} /day</Typography>
          <Typography variant="body2" color="text.secondary">
            <ReadMore>{productList.description}</ReadMore>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            style={addCartStyle}
            variant="contained"
            size="medium"
            startIcon={
              !found ? (
                <AddIcon size="medium" />
              ) : (
                <RemoveCircleIcon size="medium" />
              )
            }
            onClick={addToCart}
          >
            {!found ? <>Add to cart</> : <>Remove from cart</>}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
