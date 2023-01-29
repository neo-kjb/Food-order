import React from "react";
import styles from "./Input.module.css";

export default React.forwardRef(function Input({ label, input }, ref) {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});
