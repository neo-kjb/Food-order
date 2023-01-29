import React, { useContext } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

export default function Cart({ onClose }) {
  const cartCtx = useContext(CartContext);
  const cartItemAddHandler = (item) => {};
  const cartItemRemoveHandler = (id) => {};
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler}
          onAdd={cartItemAddHandler}
        >
          {item.name}
        </CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onClose}>
          Close
        </button>
        {cartCtx.items.length > 0 && (
          <button className={styles.button}>Order</button>
        )}
      </div>
    </Modal>
  );
}
