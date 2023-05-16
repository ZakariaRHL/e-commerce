import React, { useEffect, useState, useRef } from "react";
import ProductCard from "../../Cards/ProductsCard/ProductCard";
import axios from "axios";
import Categories from "../Categorys/Categories";

const ExploreProduct = () => {
  const [products, setProducts] = useState([]);

  // Fetch products function
  const fetchProducts = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    setProducts(response.data);
  };

  // Fetch initial products
  useEffect(() => {
    fetchProducts();
    console.log("fetshing all products");
  }, []);

  return (
    <div className="all-explore">
      <Categories />
      <div className="all-product">
        <div className="items-all">
          {products.map((item) => (
            <ProductCard data={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreProduct;
