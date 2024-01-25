import { useState } from "react";
import styles from "./CategoryDropdown.module.css";
import { IconChevronDown } from "@tabler/icons-react";
import { NavLink, useParams } from "react-router-dom";

export const CategoryDropdown = ({ categories }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { categoryId } = useParams();

  const handleToggleDropdown = () => setIsVisible(!isVisible);

  let dropdownText;

  if (!categoryId) {
    dropdownText = "All";
  } else {
    const selectedCategoryName =
      categories.find((i) => i.id === categoryId)?.name || "Select category";
    dropdownText = selectedCategoryName;
  }

  return (
    <div className={styles.dropdown}>
      <button onClick={handleToggleDropdown}>{dropdownText}</button>
      <IconChevronDown />

      {isVisible && (
        <div className={styles.dropdownContent}>
          {categories.map((category) => (
            <NavLink
              key={category.id}
              to={category.id === "All" ? "/" : `/category/${category.id}`}
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={handleToggleDropdown}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};
