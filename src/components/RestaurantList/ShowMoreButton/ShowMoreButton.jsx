import styles from "./ShowMoreButton.module.css";
import { IconPlus } from "@tabler/icons-react";

export const ShowMoreButton = ({ onShowMore }) => (
  <button onClick={onShowMore} className={styles.showMoreButton}>
    <IconPlus />
    Show More
  </button>
);
