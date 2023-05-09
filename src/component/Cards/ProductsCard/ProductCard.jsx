import React from "react";
import { Link } from "react-router-dom";
import { addItemToCart } from "../../../store/Cart-slice";
import { Button } from "@mui/material";
import "./productCard.css";
import { useDispatch } from "react-redux";

const ProductCard = ({ data }) => {
  const { id, title, price, image, category } = data;

  const dispatch = useDispatch();

  return (
    <div className="card-product" key={id}>
      <div className="card-wrap">
        <div className="card-top">
          <Link to={`/categories/${category}/${id}`}>
            <img src={image} alt="title" className="img-product" />
          </Link>
        </div>
        <div className="card-bottom">
          <p className="title-card">{title.split(" ").slice(0, 3).join(" ")}</p>
          <h3 className="price-card">${price}</h3>
        </div>
        <Button
          variant="contained"
          className="btn-add"
          style={{
            backgroundColor: "black",
            marginTop: "5px",
          }}
          onClick={() => dispatch(addItemToCart(data))}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
