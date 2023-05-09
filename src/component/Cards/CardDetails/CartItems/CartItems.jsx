import { useState } from "react";
import "./cartItems.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../../../store/Cart-slice";
import { useSelector } from "react-redux";

const CartItems = ({ data }) => {
  const { title, description, price, category, id, image } = data;
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const [quantity, setQuantity] = useState(1);

  const productInCart = items.find((item) => item.id === id);

  const handleClick = () => {
    if (productInCart) {
      return;
    } else {
      dispatch(addItemToCart(data));
    }
  };
  const increaseCart = () => {
    dispatch(addItemToCart(data));
  };

  return (
    <div className="all-item">
      <ul className="ul-link">
        <li className="li-text">
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
        </li>
        <li className="li-text">
          <Link
            to={`/categories/${category}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            /{category}
          </Link>
        </li>
        <li className="li-text">/{title}</li>
      </ul>
      <div className="item">
        <div className="inside-item">
          <div>
            <img src={image} alt={title} className="item-img" />
          </div>
          <div className="right-section">
            <h2 style={{ width: "500px" }}>{title}</h2>
            <h3 className="price-item">${price}</h3>
            <p className="desc-item">{description}</p>
            <div className="buy-section">
              {productInCart && (
                <button
                  className="btn-buy left"
                  onClick={() => dispatch(decreaseQuantity(id))}
                >
                  -
                </button>
              )}
              <input
                type="number"
                className="input-buy"
                min="1"
                defaultValue={1}
                style={{ textAlign: "center", fontWeight: "bold" }}
                value={productInCart ? productInCart.quantity : quantity}
              />
              <button className="btn-buy right" onClick={increaseCart}>
                +
              </button>
              <button className="buy-now" onClick={handleClick}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
