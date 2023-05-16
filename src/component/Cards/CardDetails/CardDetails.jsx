import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CartItems from "./CartItems/CartItems";

const CardDetails = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  console.log("im here");

  useEffect(() => {
    let isCanceled = false;
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (!isCanceled) {
          setProduct(response.data);
          console.log("fetching details card");
        }
      })
      .catch((error) => console.log(error));

    return () => {
      isCanceled = true;
    };
  }, [id]);

  return (
    <>
      <CartItems data={product} />
    </>
  );
};

export default CardDetails;
