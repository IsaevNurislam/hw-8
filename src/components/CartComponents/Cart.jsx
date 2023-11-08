import React, { useContext } from "react";
import ModalBasket from "../UI/ModalBasket";
import styled from "styled-components";
import CartItem from "./CartItem";
import { CartContext } from "../context/CartProvider";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$ ${Math.abs(cartCtx.totalAmount.toFixed(2))}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));

  return (
    <ModalBasket onClose={props.onClose}>
      <CartItems>{cartItems}</CartItems>
      <Total>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </Total>
      <Actions>
        <Button alt="true" onClick={props.onClose}>
          Close
        </Button>
        {hasItems && (
          <Button alt="true" onClick={props.onClose}>
            Order
          </Button>
        )}
      </Actions>
    </ModalBasket>
  );
};

export default Cart;

const CartItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const Actions = styled.div`
  text-align: right;
`;

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #8a2b06;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;
  color: ${({ alt }) => (alt ? "#8a2b06" : "white")};
  background-color: ${({ alt }) => (alt ? "transparent" : "#8a2b06")};

  &:hover,
  &:active {
    background-color: ${({ alt }) => (alt ? "#5a1a01" : "#8a2b06")};
    border-color: ${({ alt }) => (alt ? "#5a1a01" : "#8a2b06")};
    color: white;
  }
`;
