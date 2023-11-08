import React from "react";
import MealItem from "./MealItem";
import styled from "styled-components";

const infoOfMeals = [
  {
    id: "1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "2",
    name: "Schnitzel",
    description: "A German specialty!",
    price: 16.5,
  },
  {
    id: "3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AffordableMeals = () => {
  const listOfMeals = infoOfMeals.map(({ id, name, description, price }) => (
    <MealItem
      id={id}
      key={id}
      name={name}
      description={description}
      price={price}
    />
  ));

  return (
    <MealsCon>
      <MealsList>{listOfMeals}</MealsList>
    </MealsCon>
  );
};

export default AffordableMeals;

const MealsCon = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
`;

const MealsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
