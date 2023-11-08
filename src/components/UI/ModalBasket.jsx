import React from "react";
import ReactDom from "react-dom";

const portal = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <div style={backdropStyles} onClick={props.onClose}></div>,
        portal
      )}
      {ReactDom.createPortal(
        <div style={modalStyles}>{props.children}</div>,
        portal
      )}
    </>
  );
};

export default Modal;

const modalStyles = {
  position: "fixed",
  top: "20vh",
  left: "25%",
  width: "50%",
  backgroundColor: "white",
  padding: "1rem",
  borderRadius: "14px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
  zIndex: 30,
};
const backdropStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  zIndex: 20,
  backgroundColor: "rgba(0, 0, 0, 0.75)",
};
