import React from "react";
import { RiDeleteBack2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";

const TodosActions = ({ onReset, onDelete, isExistingCompletedTodo }) => {
  return (
    <div>
      {/* Кнопка для сброса списка задач */}
      <Button onClick={onReset}>
        <RiRefreshLine />
      </Button>
      {/* Кнопка для удаления завершенных задач */}
      <Button onClick={onDelete} disabled={!isExistingCompletedTodo}>
        <RiDeleteBack2Line />
      </Button>
    </div>
  );
};

export default TodosActions;