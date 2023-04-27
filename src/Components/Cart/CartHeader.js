import React from "react";

export function CartHeader() {
    return (
        <>
            <div
                className="cart-box"
                style={{
                    height: "50px",
                }}
            >
                <div style={{ width: "20%" ,fontWeight:"700" }} className="cart-div">
                    Product
                </div>
                <div style={{ width: "30%" ,fontWeight:"700"}} className="cart-div">
                    Name
                </div>
                <div style={{ width: "30%",fontWeight:"700" }} className="cart-div">
                    Quantity
                </div>
                <div style={{ width: "20%" ,fontWeight:"700" }}className="cart-div"> Price</div>
                {/* <div style={{ width: "10%",fontWeight:"700" }} className="cart-div">
                    Remove
                </div> */}
            </div>
        </>
    );
}
