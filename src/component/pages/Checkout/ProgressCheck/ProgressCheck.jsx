import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../schema/Schema";
import { Button } from "@mui/material";
import "./progressCheck.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProgressCheck = () => {
  const items = useSelector((state) => state.items);
  const getTotal = () => {
    const totalPrice = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return totalPrice.toFixed(2);
  };

  const notifySuc = () =>
    toast.success("Buy is success", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notifyError = () =>
    toast.error("No item found", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onsubmit = (data) => {
    if (data && items.length > 0) {
      notifySuc();
    } else {
      notifyError();
    }
    console.log(data);
  };

  return (
    <div className="all-progress">
      <div>
        <div>
          <h1>Billing Details</h1>
        </div>
        <form className="all-form">
          <label htmlFor="firstName">First Name</label>
          {errors.firstName && (
            <p className="error-msg">{errors.firstName?.message}</p>
          )}
          <input
            className="prog_inp"
            type="text"
            id="firstName"
            {...register("firstName", { required: true })}
          />

          <label htmlFor="lastName">Last Name</label>
          {errors.lastName && (
            <p className="error-msg">{errors.lastName?.message}</p>
          )}
          <input
            className="prog_inp"
            type="text"
            id="lastName"
            {...register("lastName", { required: true })}
          />

          <label htmlFor="email">Email</label>
          {errors.email && <p className="error-msg">{errors.email?.message}</p>}
          <input
            className="prog_inp"
            type="email"
            id="email"
            {...register("email", { required: true })}
          />

          <label htmlFor="city">City</label>

          {errors.city && <p className="error-msg">{errors.city?.message}</p>}
          <input
            className="prog_inp"
            type="text"
            id="city"
            {...register("city", { required: true })}
          />
          <label htmlFor="Street Address">Street Address</label>
          {errors.StreetAddress && (
            <p className="error-msg">{errors.StreetAddress?.message}</p>
          )}
          <input
            className="prog_inp"
            type="text"
            id="StreetAddress"
            {...register("StreetAddress", { required: true })}
          />

          <label htmlFor="phoneNumber">Phone Number</label>
          {errors.phoneNumber && (
            <p className="error-msg">{errors.phoneNumber?.message}</p>
          )}
          <input
            className="prog_inp"
            type="number"
            id="phoneNumber"
            {...register("phoneNumber", { required: true })}
          />
        </form>
      </div>
      <section className="right-check">
        <div className="items-check">
          {items.map((item) => (
            <div key={`${item?.title}-${item.id}`} className="map-item">
              <div style={{ display: "flex" }}>
                <div className="img-map">
                  <Link to={`/categories/${item.category}/${item.id}`}>
                    <img
                      src={item.image}
                      alt={`${item.title}`}
                      style={{ objectFit: "contain" }}
                      height={"60px"}
                    />
                  </Link>
                </div>
                <div className="right-map">
                  <h3>
                    {item.title
                      .split(" ")
                      .filter((m) => !m.includes("-"))
                      .slice(0, 2)
                      .join(" ")}
                  </h3>
                </div>
              </div>
              <div style={{ marginLeft: "300px" }}>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="table-bottom-check">
          <div className="table-content">
            <h3>Cart Total</h3>
            <div className="text-check">
              <div className="inside-tx">
                <p>Subtotal</p>
                <span>${getTotal()}</span>
              </div>
              <div className="inside-tx">
                <p>Shipping</p>
                <span>Free</span>
              </div>
              <div className="inside-tx">
                <p>Total</p>
                <span>${getTotal()}</span>
              </div>
            </div>
            <div className="progress-btn">
              <Button
                variant="contained"
                sx={{
                  height: "56px",
                  width: "260px",
                  margin: "10px",
                  backgroundColor: "#DB4444",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                  },
                  "&:active": {
                    backgroundColor: "red",
                    color: "white",
                  },
                }}
                onClick={handleSubmit(onsubmit)}
              >
                Progress to checkout
              </Button>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ProgressCheck;
