import React from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

export default function MealItem({ name, description, price }) {
  const fixedPrice = `$${price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{fixedPrice}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
}
