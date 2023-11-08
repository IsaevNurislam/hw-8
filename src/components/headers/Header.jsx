import React from "react";
import styled from "styled-components";
import HeaderCardBtn from "./HeaderCartBtn";

const Header = (props) => {
  return (
    <HeaderContainer>
      <h1>RealMeal</h1>
      <HeaderCardBtn onClick={props.onShowCart} />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 5rem;
  background-color: #8a2b06;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;
