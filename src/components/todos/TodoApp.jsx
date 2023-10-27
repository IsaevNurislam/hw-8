import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import TodosActions from "./TodosActions";
import DeleteModal from "../UI/DeleteModal";
import EditModal from "../UI/EditModal";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
      lastModifiedAt: new Date().toLocaleString(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setSelectedTodoId(id);
    setIsOpen(true);
  };

  const confirmDeleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== selectedTodoId));
    setIsOpen(false);
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
            lastModifiedAt: new Date().toLocaleString(),
          };
        }
        return todo;
      })
    );
  };

  const editTodoHandler = (id, newText) => {
    setSelectedTodo({
      id: id,
      text: newText,
    });
    setIsEditModalOpen(true);
  };

  const updateTodoHandler = (id, newText) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            text: newText,
            lastModifiedAt: new Date().toLocaleString(),
          };
        }
        return todo;
      })
    );
    setIsEditModalOpen(false);
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodos = () => {
    setTodos(todos.filter((item) => !item.isCompleted));
  };

  const completedTodoCount = todos.filter((item) => item.isCompleted).length;
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm onAddTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          onReset={resetTodosHandler}
          onDelete={deleteCompletedTodos}
          isExistingCompletedTodo={!!completedTodoCount}
        />
      )}
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodoHandler}
        onToggle={toggleTodoHandler}
        onEditTodo={editTodoHandler}
      />
      {completedTodoCount > 0 && (
        <h2>
          You have completed {completedTodoCount}
          {completedTodoCount > 1 ? " tasks" : " task"}
        </h2>
      )}
      {isOpen && (
        <DeleteModal
          title="Delete Task"
          onConfirm={confirmDeleteHandler}
          onCancel={() => {
            setIsOpen(false);
            setIsEditModalOpen(false);
          }}
        >
          Are you sure you want to delete this task?
        </DeleteModal>
      )}
      {isEditModalOpen && (
        <EditModal
          title="Edit Task"
          onConfirm={() =>
            updateTodoHandler(selectedTodo.id, selectedTodo.text)
          }
          onCancel={() => {
            setIsOpen(false);
            setIsEditModalOpen(false);
          }}
          onChange={(event) =>
            setSelectedTodo({ ...selectedTodo, text: event.target.value })
          }
          value={selectedTodo.text}
          type="text"
        ></EditModal>
      )}
    </div>
  );
};

export default TodoApp;
