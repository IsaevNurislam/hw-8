import React from "react";
import styled from "styled-components";

const CartItem = (props) => {
  const price = `$ ${props.price.toFixed(2)}`;

  return (
    <CartItemContainer>
      <CartItemWrapper>
        <div>
          <ItemName>{props.name}</ItemName>
          <Summary>
            <Price>{price} </Price>
            <Amount> x {props.amount}</Amount>
          </Summary>
        </div>
        <Actions>
          <Button onClick={props.onRemove}>-</Button>
          <Button onClick={props.onAdd}>+</Button>
        </Actions>
      </CartItemWrapper>
    </CartItemContainer>
  );
};

export default CartItem;

const CartItemContainer = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
`;

const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemName = styled.h2``;

const Summary = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`;

const Amount = styled.span``;

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

  &:hover,
  &:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }
`;
