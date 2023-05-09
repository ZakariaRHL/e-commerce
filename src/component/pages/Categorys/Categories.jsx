import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./categories.css";
import axios from "axios";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        const categories = response.data.map((category, index) => {
          return { id: index + 1, name: category };
        });
        setCategory(categories);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="categories">
      {category.map((item) => (
        <li className="categories" key={item.id}>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "category-name"
                : isActive
                ? "active"
                : "category-name"
            }
            to={`/categories/${item.name}`}
          >
            {item.name.toUpperCase()}
          </NavLink>
        </li>
      ))}
    </div>
  );
};

export default Categories;
