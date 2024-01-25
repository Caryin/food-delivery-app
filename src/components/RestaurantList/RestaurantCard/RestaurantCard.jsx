import {
  IconGiftFilled,
  IconPercentage,
  IconStarFilled,
} from "@tabler/icons-react";
import React from "react";
import { Card } from "../../ui/Card";
import styles from "./RestaurantCard.module.css";

export const RestaurantCard = ({ restaurant }) => (
  <Card>
    {restaurant.promotion === "discount" && (
      <div className={`${styles.promoTag} ${styles.discount}`}>
        <IconPercentage />
      </div>
    )}
    {restaurant.promotion === "1+1" && (
      <div className={`${styles.promoTag} ${styles.onePlusOne}`}>
        <span>1+1</span>
      </div>
    )}
    {restaurant.promotion === "gift" && (
      <div className={`${styles.promoTag} ${styles.gift}`}>
        <IconGiftFilled />
      </div>
    )}

    <img
      src={restaurant.imageUrl}
      alt={restaurant.name}
      className={styles.coverImage}
    />

    <div className={styles.cardDetails}>
      <p>{restaurant.restaurant}</p>

      <div className={styles.infoRow}>
        <span className={styles.rating}>
          <IconStarFilled />
          {restaurant.rating.toFixed(2)}
        </span>

        <span className={styles.cookingTime}>
          {restaurant.minCookTime}-{restaurant.maxCookTime} min
        </span>

        {restaurant.isNew && <span className={styles.new}>New</span>}
      </div>
    </div>
  </Card>
);
