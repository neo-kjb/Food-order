import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton({ onClick }) {
  const [btnHighlihgted, setBtnHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curVal, item) => {
    return curVal + item.amount;
  }, 0);
  const btnClasses = `${styles.button} ${btnHighlihgted ? styles.bump : ""}`;
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnHighlighted(true);

    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}
