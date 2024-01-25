import { useState } from "react";
import { useQuery } from "react-query";
import { useOutletContext, useParams } from "react-router-dom";
import { RESTAURANT_LIST_API_URL } from "../../constants";
import { RestaurantCard } from "./RestaurantCard";
import styles from "./RestaurantList.module.css";
import { ShowMoreButton } from "./ShowMoreButton";

const fetchRestaurantList = async () => {
  const res = await fetch(RESTAURANT_LIST_API_URL);
  return await res.json();
};

const PAGE_SIZE = 9;

export const RestaurantList = () => {
  const { categoryId } = useParams();
  const [currentTotal, setCurrentTotal] = useState(PAGE_SIZE);
  const { search } = useOutletContext();

  const { data = [], isLoading } = useQuery({
    queryKey: ["restaurant-list"],
    queryFn: fetchRestaurantList,
    select: (res) => res.foods,
  });

  let categoryFilteredList;

  if (categoryId) {
    categoryFilteredList = data.filter((i) => i.categoryId === categoryId);
  } else {
    categoryFilteredList = data;
  }

  const searchFilteredList = categoryFilteredList.filter((i) =>
    i.restaurant.toLowerCase().includes(search)
  );

  const totalListLength = searchFilteredList.length;

  const paginatedList = searchFilteredList.slice(0, currentTotal);

  const handleShowMore = () => {
    if (currentTotal + PAGE_SIZE < totalListLength) {
      setCurrentTotal(currentTotal + PAGE_SIZE);
    } else {
      setCurrentTotal(totalListLength);
    }
  };

  if (isLoading)
    return (
      <div className={styles.loading}>
        <p>Loading...</p>
      </div>
    );

  if (paginatedList.length <= 0)
    return (
      <div className={styles.searchNotFound}>
        <p>No restaurant found.</p>
      </div>
    );

  return (
    <>
      <div className={styles.gridContainer}>
        {paginatedList.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>

      {currentTotal < totalListLength && (
        <ShowMoreButton onShowMore={handleShowMore} />
      )}
    </>
  );
};
