import React from "react";
import TodoItem from "./TodoItem";
import styles from "../Todo.module.css";

const TodoList = ({ todos, onRemove, onToggle, onEdit }) => {
  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
