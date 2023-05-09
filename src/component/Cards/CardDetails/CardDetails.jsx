import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CartItems from "./CartItems/CartItems";

const CardDetails = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        console.log("res", response.data);
        setProduct(response.data);
      })
      .catch((error) => console.log(error));
    console.log("st", product);
  }, [id]);

  return (
    <>
      <CartItems data={product} />
    </>
  );
};

export default CardDetails;
