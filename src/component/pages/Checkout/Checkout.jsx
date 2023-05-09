import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import "./checkout.css";
import { cartOpen } from "../../../store/Cart-slice";
import { useNavigate } from "react-router-dom";

export const myStyle = {
  width: "195px",
  height: "56px",
  backgroundColor: "white",
  color: "black",
  border: "1px solid rgba(0, 0, 0, 0.5)",

  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
  "&:active": {
    backgroundColor: "red",
    color: "white",
  },
};

const Checkout = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("itemCheck", items);
  const getTotal = () => {
    const totalPrice = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const fixPrice = totalPrice.toFixed(2);
    return fixPrice;
  };

  return (
    <div className="all-checkout">
      <div className="table">
        <TableContainer component={Paper} style={{ width: "1170px" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">SubTotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow
                  key={item.title}
                  sx={{ "&:last-child , &:last-child ": { border: 0 } }}
                >
                  <TableCell
                    sx={{ display: "flex" }}
                    component="th"
                    scope="row"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        height: "80px",
                        width: "120px",
                        objectFit: "contain",
                      }}
                    />
                    <TableCell style={{ width: "200px", marginLeft: "15px" }}>
                      {item.title}
                    </TableCell>
                  </TableCell>
                  <TableCell align="right">{item.price.toFixed(2)}</TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">
                    {item.totalPrice.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="bottom-check">
        <Button
          variant="contained"
          disableElevation
          sx={myStyle}
          onClick={() => navigate("/")}
        >
          Return To Shop
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={myStyle}
          onClick={() => dispatch(cartOpen({}))}
        >
          Update Cart
        </Button>
      </div>
      <div className="table-bottom">
        <div className="table-content">
          <h3>Cart Total</h3>
          <div className="text-check">
            <div className="inside-tx">
              <p>Subtotal</p>
              <span>${getTotal()}</span>
            </div>
            <div className="inside-tx">
              <p>Shipping</p>
              <span>Free</span>
            </div>
            <div className="inside-tx">
              <p>Total</p>
              <span>${getTotal()}</span>
            </div>
          </div>
          <div className="progress-btn">
            <Button
              variant="contained"
              onClick={() => navigate("/progressCheckout")}
              sx={{
                height: "56px",
                width: "260px",
                margin: "10px",
                backgroundColor: "#DB4444",
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                },
                "&:active": {
                  backgroundColor: "red",
                  color: "white",
                },
              }}
            >
              Progress to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
