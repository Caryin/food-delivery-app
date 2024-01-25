import { useQuery } from "react-query";
import { CategoryDropdown } from "./CategoryDropdown";
import { CategoryTabs } from "./CategoryTabs";
import { CATEGORY_LIST_API_URL } from "../../constants";

const fetchCategories = async () => {
  const res = await fetch(CATEGORY_LIST_API_URL);

  return await res.json();
};

export const CategoryFilter = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const categories = [{ id: "All", name: "All" }, ...data];

  if (isLoading) return null;

  return (
    <nav>
      <CategoryDropdown categories={categories} isLoading={isLoading} />
      <CategoryTabs categories={categories} isLoading={isLoading} />
    </nav>
  );
};
