import React from "react";
import "./header.style.css";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
import ShoppingBagOutlined from "@mui/icons-material/ShoppingBagOutlined";
import { MdOutlineSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { cartOpen } from "../../store/Cart-slice";

const Header = () => {
  const cartItems = useSelector((state) => state.items);
  const isCartOpen = useSelector((state) => state.isCartOpen);
  const dispatch = useDispatch();

  return (
    <nav className={`header ${isCartOpen ? "hidden" : ""} `}>
      <div className="logo-header">
        <h1>SHOP</h1>
        <ul>
          <div className="links">
            <li>
              <Link
                to={"/"}
                className="list-header"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/categories/jewelery"}
                className="list-header"
                style={{ textDecoration: "none" }}
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="list-header"
                style={{ textDecoration: "none" }}
              >
                Sign Up
              </Link>
            </li>
          </div>
        </ul>
      </div>
      <ul className="header-section">
        <div className="header-layout">
          <div className="dv-input">
            <input
              type="text"
              placeholder="What are you looking for ?"
              className="search-input"
            />
            <MdOutlineSearch className="icon-Search" />
          </div>
        </div>
      </ul>
      <div className="shop-icons">
        <Badge
          badgeContent={cartItems.length}
          color="secondary"
          invisible={cartItems.length === 0}
          sx={{
            "& .MuiBadge-badge": {
              right: 5,
              top: 5,
              padding: "0 4px",
              height: "18px",
              backgroundColor: "red",
            },
          }}
        >
          <IconButton
            onClick={() => dispatch(cartOpen({}))}
            sx={{ color: "black", marginLeft: "80%" }}
          >
            <ShoppingBagOutlined />
          </IconButton>
        </Badge>
      </div>
      <div className="border"></div>
    </nav>
  );
};

export default Header;
