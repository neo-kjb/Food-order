import React from "react";
import styles from "./Cart.module.css";

export default function Cart() {
  const cartItems = (
    <ul className={styles["cart-item"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>45.35</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </div>
  );
}
