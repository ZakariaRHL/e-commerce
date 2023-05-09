import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ProductCard from "../../Cards/ProductsCard/ProductCard";
import "./exploreProduct.css";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ExploreProduct = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const data = response.data;
        setProduct(data.slice(0, 8));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="all-explore">
      <div className="btn-allpro">
        <h1>Explore Our Products</h1>
        <div className="btn-explore">
          <Stack direction="row" spacing={1}>
            <IconButton>
              <NavigateBeforeIcon />
            </IconButton>
            <IconButton>
              <NavigateNextIcon />
            </IconButton>
          </Stack>
        </div>
      </div>
      <div className="all-product">
        <div className="items-all">
          {product.map((item) => (
            <ProductCard data={item} key={item.id} />
          ))}
        </div>
        <Button
          sx={{
            backgroundColor: "red",
            color: "white",
            borderRadius: 0,
            width: "250px",
            padding: "20px 40px",
            m: "20px 0",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
            "&:active": {
              backgroundColor: "red",
              color: "white",
            },
          }}
          onClick={() => navigate("/allProducts")}
        >
          SHOW ALL
        </Button>
      </div>
    </div>
  );
};

export default ExploreProduct;
