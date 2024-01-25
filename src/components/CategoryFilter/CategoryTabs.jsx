import { NavLink } from "react-router-dom";
import styles from "./CategoryTabs.module.css";

export const CategoryTabs = ({ categories }) => (
  <ul className={styles.tabs}>
    {categories?.map((category) => (
      <li key={category.id}>
        <NavLink
          to={category.id === "All" ? "/" : `/category/${category.id}`}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          {category.name}
        </NavLink>
      </li>
    ))}
  </ul>
);
