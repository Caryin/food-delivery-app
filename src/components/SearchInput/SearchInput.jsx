import styles from "./SearchInput.module.css";
import { IconSearch } from "@tabler/icons-react";

export const SearchInput = ({ onChange }) => {
  return (
    <div className={styles.searchBox}>
      <IconSearch className={styles.searchIcon} color="#9b9ea1" size="20px" />
      <input
        type="search"
        placeholder="Enter restaurant name..."
        className={styles.searchInput}
        onChange={onChange}
      />
    </div>
  );
};
