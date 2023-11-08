import React, { useContext } from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";
import { CartContext } from "../context/CartProvider";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$.${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <Meal>
      <div>
        <MealName>{props.name}</MealName>
        <Description>{props.description}</Description>
        <Price>{price}</Price>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </Meal>
  );
};

export default MealItem;

const Meal = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

const MealName = styled.h3`
  margin: 0 0 0.25rem 0;
`;

const Description = styled.div`
  font-size: 1rem;
  color: #555;
`;

const Price = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
`;
