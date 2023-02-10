import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

export default function Cart({ onClose }) {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
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
      {isCheckout && <Checkout onCancel={onClose} />}
      {!isCheckout && (
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={onClose}>
            Close
          </button>
          {cartCtx.items.length > 0 && (
            <button className={styles.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
}
