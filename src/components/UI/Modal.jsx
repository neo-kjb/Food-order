import React, { Fragment } from "react";
import styles from "./Modal.module.css";
import ReactDom from "react-dom";

const Backdrop = () => {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");

export default function Modal({ children }) {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}
