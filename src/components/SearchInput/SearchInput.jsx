import styles from "./SearchInput.module.css";
import { Search } from "lucide-react";

export const SearchInput = () => {
  return (
    <div className={styles["search-box"]}>
      <Search className={styles["search-icon"]} color="#9b9ea1" size="20px" />
      <input
        type="search"
        placeholder="Enter restaurant name..."
        className={styles["search-input"]}
      />
    </div>
  );
};
