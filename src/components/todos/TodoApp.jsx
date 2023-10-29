import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import TodosActions from "./TodosActions";
import DeleteModal from "../UI/DeleteModal";
import EditModal from "../UI/EditModal";

const TodoApp = () => {
  // Состояния
  const [todos, setTodos] = useState([]); // Список задач
  const [isOpen, setIsOpen] = useState(false); // Флаг открытия модального окна удаления
  const [selectedTodoId, setSelectedTodoId] = useState(null); // ID выбранной задачи для удаления
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Флаг открытия модального окна редактирования
  const [selectedTodo, setSelectedTodo] = useState(null); // Выбранная задача для редактирования

  // Эффекты
  useEffect(() => {
    // Загрузка задач из localStorage при загрузке компонента
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    // Сохранение задач в localStorage при изменении списка задач
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Функции обработчики
  const addTodoHandler = (text) => {
    // Добавление новой задачи
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
      lastModifiedAt: new Date().toLocaleString(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    // Удаление задачи
    setSelectedTodoId(id);
    setIsOpen(true);
  };

  const confirmDeleteHandler = () => {
    // Подтверждение удаления задачи
    setTodos(todos.filter((item) => item.id !== selectedTodoId));
    setIsOpen(false);
  };

  const toggleTodoHandler = (id) => {
    // Переключение статуса задачи (выполнена/не выполнена)
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
    // Редактирование задачи
    setSelectedTodo({
      id: id,
      text: newText,
    });
    setIsEditModalOpen(true);
  };

  const updateTodoHandler = (id, newText) => {
    // Обновление задачи после редактирования
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
    // Сброс списка задач
    setTodos([]);
  };

  const deleteCompletedTodos = () => {
    // Удаление завершенных задач
    setTodos(todos.filter((item) => !item.isCompleted));
  };

  // Вычисляемые значения
  const completedTodoCount = todos.filter((item) => item.isCompleted).length;

  // Возвращаемый JSX
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
          {completedTodoCount > 1 ? " todos" : " todo"}
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
         Are you sure you want to delete this todo?
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