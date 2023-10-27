import React from "react";
import { RiTodoFill, RiDeleteBack2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import styled, { css } from "styled-components";
import { MdModeEdit } from "react-icons/md";

const Todo = ({ todo, onDeleteTodo, onToggle, onEditTodo }) => {
  const isCompleted = todo.isCompleted;

  return (
    <TodoContainer $completed={isCompleted}>
      {/* Значок задачи */}
      <TodoIcon />
      {/* Текст задачи */}
      <TodoText>{todo.text}</TodoText>
      {/* текст времени изменения или создование */}
      <CreatedAt>{todo.lastModifiedAt}</CreatedAt>
      {/* Значок удаления задачи */}
      <DeleteIcon onClick={() => onDeleteTodo(todo.id)} />
      {/* Значок завершения задачи */}
      <CheckIcon onClick={() => onToggle(todo.id)} />
      {/* Значок редактирования задачи */}
      <EditIcon onClick={() => onEditTodo(todo.id, todo.text)} />
    </TodoContainer>
  );
};

export default Todo;

const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin: 15px 0;
  font-size: 1.5rem;
  border-radius: 5px;
  border: 2px solid #555;
  color: #112d49;
  background-color: #fbfef9;
  width: 100%;

  ${({ $completed }) =>
    $completed &&
    css`
      background-color: unset;
      border-color: gray;
      color: gray;
    `}
`;

const TodoText = styled.div`
  width: 100%;
  text-align: left;
`;

const TodoIcon = styled(RiTodoFill)`
  font-size: 1.8rem;
  margin-right: 10px;
  color: teal;
`;

const CheckIcon = styled(FaCheck)`
  cursor: pointer;
  color: lightgrey;
  padding: 0 7px;
  font-size: 2.5rem;
  transition: transform 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.8);
    color: green;
  }
`;

const DeleteIcon = styled(RiDeleteBack2Line)`
  cursor: pointer;
  color: lightgrey;
  padding: 0 7px;
  font-size: 2.5rem;
  transition: transform 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.8);
    color: red;
  }
`;

const EditIcon = styled(MdModeEdit)`
  cursor: pointer;
  color: lightgrey;
  padding: 0 7px;
  font-size: 2.5rem;
  transition: transform 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.8);
    color: orange;
  }
`;

const CreatedAt = styled.p`
  font-size: 12px;
`;
