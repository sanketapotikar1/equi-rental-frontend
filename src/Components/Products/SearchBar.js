import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { useNavigate } from "react-router-dom";

export function SearchBar({ cartList, productList, setProductList }) {
  // console.log(productList);

  const cartBadgeCount = cartList.length;
  // console.log(`Cart Btn length of list : ${cartBadgeCount}`);

  const navigate = useNavigate();

  const mystyle = {
    justifyContent: "center",
    alignItem: "center",
    width: "50%",
    height: "200px",
    marginLeft: "30%",
  };

  const cartBtnStyle = {
    width: "10%",
    float: "right",
    background: "#2E3B55",
    margin: "45px 40px 0px 0px",
    padding: "16px 70%",
  };

  const addproductbtn = {
    width: "10%",
    float: "left",
    background: "#2E3B55",
    margin: "45px 0px 0px 40px",
    padding: "16px 60%",
  };

  const cart = () => {
    navigate("/cart");
  };

  return (
    <>
      <Box style={{ display: "flex" }}>
        <Box style={{ margin: "0px" }}>
          <Button
            onClick={() => {
              navigate("/addproducts");
            }}
            style={addproductbtn}
            variant="contained"
            size="Large"
            startIcon={<AddSharpIcon size="Large" />}
          >
            <Box
              style={{
                marginLeft: "6px",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Product
            </Box>
          </Button>
        </Box>

        <Box style={{ width: "90%" }}>
          <Stack style={mystyle} spacing={2} sx={{ width: 500 }}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={productList.map((option) => option.pname)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search Products"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
            <Button
              style={{ padding: "7px", background: "#2E3B55" }}
              variant="contained"
              startIcon={<SearchIcon size="large" />}
            >
              Search
            </Button>
          </Stack>
        </Box>
        <Box style={{ margin: "0px" }}>
          <Button
            onClick={cart}
            style={cartBtnStyle}
            variant="contained"
            size="Large"
            startIcon={
              <Badge badgeContent={cartBadgeCount} color="primary">
                <ShoppingCartIcon size="Large" />
              </Badge>
            }
          >
            <Box
              style={{
                marginLeft: "6px",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Cart
            </Box>
          </Button>
        </Box>
      </Box>
    </>
  );
}
