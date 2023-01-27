import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton({ onClick }) {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curVal, item) => {
    return curVal + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}
