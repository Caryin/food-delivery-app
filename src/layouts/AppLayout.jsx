import { useState } from "react";
import { Outlet } from "react-router-dom";
import { CategoryFilter } from "../components/CategoryFilter";
import { SearchInput } from "../components/SearchInput";
import styles from "./AppLayout.module.css";

export const AppLayout = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => setSearch(e.target.value.toLowerCase());

  return (
    <main className={styles.container}>
      <SearchInput onChange={handleChange} />
      <CategoryFilter />
      <Outlet context={{ search }} />
    </main>
  );
};
