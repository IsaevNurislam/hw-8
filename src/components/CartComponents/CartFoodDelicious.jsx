import React from "react";
import styled from "styled-components";

const CartFoodDelicious = () => {
  return (
    <Con>
      <h1>Delicious Food, Delivered To You</h1>

      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious Breakfast, lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </Con>
  );
};

export default CartFoodDelicious;

const Con = styled.div`
  background-color: #383838;
  color: #fff;
  box-shadow: 3px 3px 3px 3px black;
  width: 53%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  width: 70%;
  z-index: 1;
  p {
    width: 88%;
  }
`;
