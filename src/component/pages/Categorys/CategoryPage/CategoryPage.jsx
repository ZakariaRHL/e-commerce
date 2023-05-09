import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../../Cards/ProductsCard/ProductCard";
import { CircularProgress } from "@mui/material";
import "./CategoryPage.css";
import axios from "axios";
import Categories from "../Categories";

const CategoryPage = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${name}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [name]);

  return (
    <div>
      {loading ? (
        <div className="loading-spinner">
          <CircularProgress />
        </div>
      ) : (
        <Fragment>
          <Categories />
          <div className="all-category-page">
            <div className="cate-products">
              {product.map((item) => (
                <ProductCard data={item} key={item.id} />
              ))}
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default CategoryPage;
