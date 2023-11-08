import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { CartContext } from "../context/CartProvider";

const HeaderCartBtn = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Button
      $ishighlighted={btnIsHighlighted ? "true" : undefined}
      onClick={props.onClick}
    >
      <span>Your Cart</span>
      <Badge>{numberOfCartItems}</Badge>
    </Button>
  );
};

export default HeaderCartBtn;

const Button = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.7rem 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #2c0d00;
  }

  ${({ $ishighlighted }) =>
    $ishighlighted &&
    css`
      animation: bump 300ms;
    `}

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(1.05);
    }
    20% {
      transform: scale(1);
    }
    30% {
      transform: scale(1.05);
    }
    40% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Badge = styled.span`
  background-color: #b94517;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
`;
