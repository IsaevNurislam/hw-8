import React from "react";
import styled from "styled-components";
// Компонент Button
const Button = (props) => {
  // Деструктурируем пропсы, чтобы извлечь необходимые значения
  const { children, title, onClick, disabled = false, ...rest } = props;

  // Возвращаем элемент кнопки с переданными пропсами
  return (
    <Buttons onClick={onClick} title={title} disabled={disabled} {...rest}>
      {children}
    </Buttons>
  );
};

export default Button;

const Buttons = styled.button`
  width: 60px;
  height: 40px;
  border-radius: 10px;
  margin: 0 5px 0 5px;
  border: none;
  &:hover {
    background-color: rgb(240, 240, 155);
  }
`;
