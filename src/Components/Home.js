import * as React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const myStyle = {
    backgroundImage: "url(./Images/camera.jpg)",
    height: "95vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    opacity: "1.0",
  };

  return (
    <>
      <div style={myStyle}>
        <AuthButton />
      </div>
    </>
  );
}

function AuthButton() {

  const Navigate = useNavigate();

  const ButtonStyle = {
    background: "#2E3B55",
    padding: "15px 50px",
    margin: "10px 5px 15px 20px",
  };


  return (
    <>
      <Button
        variant="contained"
        size="large"
        style={ButtonStyle}
        onClick={()=>Navigate('/login')}
      >
        Login
      </Button>
      <Button
        variant="contained"
        size="large"
        style={ButtonStyle}
        onClick={()=>Navigate('/register')}
      >
        Sign-up
      </Button>
    </>
  );
}

