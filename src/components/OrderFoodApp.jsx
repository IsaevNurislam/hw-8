import React, { useState } from "react";
import Header from "./headers/Header";
import Meals from "./meals/AffordableMeals";
import CartProvider from "./context/CartProvider";
import styled from "styled-components";
import meals from "../assets/image/meals.jpg";
import CartFoodDelicious from "./CartComponents/CartFoodDelicious";
import Cart from "./CartComponents/Cart";

const OrderFoodApp = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Container>
        <Img src={meals} alt="" />
        <Content>
          <CartFoodDelicious />
          <Meals />
        </Content>
      </Container>
    </CartProvider>
  );
};

export default OrderFoodApp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
`;

const Img = styled.img`
  width: 110%;
  height: 100%;
  object-fit: cover;
  transform: rotate(-5deg) translateY(-4rem) translateX(-1rem);
  margin-bottom: -12rem;
  margin-top: -10rem;
`;
