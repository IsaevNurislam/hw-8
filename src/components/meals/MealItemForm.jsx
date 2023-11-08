import React, { useRef, useState } from "react";
import styled from "styled-components";
import InputNum from "../UI/InputNum";

const MealItemForm = ({ onAddToCart, id }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;

    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 10
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <Form onSubmit={formSubmitHandler}>
      <InputNum
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button>+Add</Button>
      {!amountIsValid && (
        <ErrorMessage>Please Enter a Valid Amount (1-10)</ErrorMessage>
      )}
    </Form>
  );
};

export default MealItemForm;

const Form = styled.form`
  text-align: right;
`;

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: #8a2b06;
  border: 1px solid #8a2b06;
  color: white;
  padding: 0.25rem 2rem;
  border-radius: 20px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #641e03;
    border-color: #641e03;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 100px;
`;
