import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeTodoInput,
  addTodo,
  toggleTodoStatus,
  removeTodo,
  clearAllTodos,
  changeFilter,
  editTodo,
} from "../actions/todos";
import Todos from "../components/Todos";
import { getFilteredTodos } from "../selectors/todos";

const TodosContainer = () => {
  const { input, filter, filteredTodos } = useSelector((state) => ({
    input: state.input,
    filter: state.filter,
    filteredTodos: getFilteredTodos(state),
  }));
  
  const dispatch = useDispatch();

  const onChangeInput = useCallback((input) => dispatch(changeTodoInput(input)), [dispatch]);
  const onInsert = useCallback((input) => dispatch(addTodo(input)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggleTodoStatus(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(removeTodo(id)), [dispatch]);
  const onClearAll = useCallback(() => dispatch(clearAllTodos()), [dispatch]);
  const onChangeFilter = useCallback((filter) => dispatch(changeFilter(filter)),[dispatch]);
  const onEdit = useCallback((id, input) => dispatch(editTodo(id, input)), [dispatch]);

  return (
    <Todos
      input={input}
      todos={filteredTodos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
      onClearAll={onClearAll}
      filter={filter}
      onChangeFilter={onChangeFilter}
      onEdit={onEdit}
    />
  );
};

export default TodosContainer;
