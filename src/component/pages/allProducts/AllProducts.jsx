import React, { useEffect, useState } from "react";
import ProductCard from "../../Cards/ProductsCard/ProductCard";
import axios from "axios";
import Categories from "../Categorys/Categories";

const ExploreProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const data = response.data;
        setProduct(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="all-explore">
      <Categories />
      <div className="all-product">
        <div className="items-all">
          {product.map((item) => (
            <ProductCard data={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreProduct;
