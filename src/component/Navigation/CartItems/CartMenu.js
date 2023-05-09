import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import EmptyImage from "../../../Assests/EmptyCart.svg";
import {
  cartOpen,
  removeItemFromCart,
  addItemToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../../store/Cart-slice";
import { useNavigate } from "react-router-dom";
import "./cartMenu.css";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = useSelector((state) => state.items);
  const totalQuantity = useSelector((state) => state.totalQuantity);
  const isCartOpen = useSelector((state) => state.isCartOpen);

  const checkout = () => {
    dispatch(cartOpen({}));
    navigate("/checkout");
  };

  const getTotal = () => {
    const totalPrice = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const fixPrice = totalPrice.toFixed(2);
    return fixPrice;
  };

  return (
    <Box
      display={isCartOpen ? "block" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="hidden"
    >
      {/* MODAL */}
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          {/*Header */}
          <FlexBox mb={"15px"}>
            <Typography variant="h3">SHOPPING BAG ({items.length}) </Typography>
            <IconButton onClick={() => dispatch(cartOpen())}>
              <CloseIcon />
            </IconButton>
          </FlexBox>
          {/* Cart List*/}

          {items.length === 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div className="empty-img">
                <img src={EmptyImage} alt="empty" style={{ width: "300px" }} />
                <p>Add some items to your cart</p>
              </div>
            </div>
          ) : (
            <Box>
              {items.map((item) => (
                <Box key={`${item?.title}-${item.id}`}>
                  <FlexBox p={"15px 0"}>
                    <Box flex={"1 1 40%"}>
                      <Link to={`/categories/${item.category}/${item.id}`}>
                        <img
                          src={item.image}
                          alt={`${item.title}`}
                          style={{ objectFit: "contain" }}
                          width={"123px"}
                          height={"164px"}
                          onClick={() => dispatch(cartOpen({}))}
                        />
                      </Link>
                    </Box>
                    <Box flex={"1 1 60%"}>
                      <FlexBox>
                        <Typography fontWeight={"bold"}>
                          {item?.title}
                        </Typography>
                        <IconButton
                          onClick={() => dispatch(removeItemFromCart(item.id))}
                        >
                          <CloseIcon />
                        </IconButton>
                      </FlexBox>
                      {/* AMOUNT */}
                      <FlexBox m="15 0">
                        <Box
                          display="flex"
                          alignItems="center"
                          border={`1.5px solid`}
                        >
                          <IconButton
                            onClick={() => dispatch(decreaseQuantity(item.id))}
                          >
                            <RemoveIcon />
                          </IconButton>
                          <Typography>{item.quantity}</Typography>
                          <IconButton
                            onClick={() => dispatch(addItemToCart(item))}
                          >
                            <AddIcon />
                          </IconButton>
                        </Box>
                        {/* PRICE*/}
                        <Typography fontWeight="bold">
                          ${item.totalPrice.toFixed(2)}
                        </Typography>
                      </FlexBox>
                    </Box>
                  </FlexBox>
                  <Divider />
                </Box>
              ))}

              {/* ACTIONS */}
              <Box m="20px 0">
                <FlexBox m="20px 0">
                  <Typography fontWeight="bold">SUBTOTAL</Typography>
                  <Typography fontWeight="bold">${getTotal()}</Typography>
                </FlexBox>
                <Button
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: 0,
                    minWidth: "100%",
                    padding: "20px 40px",
                    m: "20px 0",
                    "&:hover": {
                      backgroundColor: "red",
                      color: "white",
                    },
                    "&:active": {
                      backgroundColor: "black",
                      color: "white",
                    },
                  }}
                  onClick={checkout}
                >
                  CHECKOUT
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;
