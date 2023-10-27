import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const TodoList = ({ todos, onDeleteTodo, onToggle, onEditTodo }) => {
  return (
    <TodoListContainer>
      {/* Отображение списка задач */}
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          onDeleteTodo={onDeleteTodo}
          onToggle={onToggle}
          onEditTodo={onEditTodo} // Pass the onEditTodo callback to the Todo component
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;

const TodoListContainer = styled.div`
  padding: 10px;
`;