import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const inputStyles = {
    width: "3rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    font: "inherit",
    paddingLeft: "0.5rem",
  };

  const labelStyles = {
    fontWeight: "bold",
    marginRight: "1rem",
  };

  const containerStyles = {
    display: "flex",
    alignItems: "center",
    marginBottom: "0.5rem",
  };

  return (
    <div style={containerStyles}>
      <label style={labelStyles} htmlFor={props.input.id}>
        {props.label}
      </label>
      <input ref={ref} style={inputStyles} {...props.input} />
    </div>
  );
});

export default Input;
