import React, { useState } from "react";
import "./cartExplore.css";
import casque from "../../../../Assests/Casque.jpg";
import { Button } from "@mui/material";

const CartExplore = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className="box-cart-explore"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="img-explore">
        <img src={casque} alt="image" style={{ height: "180px" }} />
      </div>
      <div className="explore-bottom">
        <h3>Casque</h3>
        <h2>$150</h2>
      </div>
      <div>
        {isHovered && <Button className="btn-explore-buy">Buy Now</Button>}
      </div>
    </div>
  );
};

export default CartExplore;
