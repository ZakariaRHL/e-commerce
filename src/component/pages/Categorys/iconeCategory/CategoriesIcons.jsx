import React from "react";
import { categoriesImage } from "../../../../dataCate";
import { Link, NavLink } from "react-router-dom";
import "./categoriesIcons.css";

const CategoriesIcons = () => {
  return (
    <div
      style={{
        display: "flex",
        margin: "20px",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Browse By Category</h1>
      </div>
      <div style={{ display: "flex" }}>
        {categoriesImage.map((item) => (
          <div className="box-cate" key={`${item.id}-${item.name}`}>
            <NavLink
              to={`/categories/${item.name}`}
              className="link-icons"
              style={{ textDecoration: "none" }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ height: "56px", width: "56px" }}
              />
              <h3>{item.name}</h3>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesIcons;
