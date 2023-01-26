import React from "react";
import styles from "./Input.module.css";

export default function Input({ label, input }) {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
}
