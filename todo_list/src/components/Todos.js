import React from "react";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import TodoFilter from "./TodoFilter";

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
  onClearAll,
  filter,
  onChangeFilter,
  onEdit,
}) => {
  return (
    <div>
      <TodoHeader />
      <TodoInput
        input={input}
        onInsert={onInsert}
        onChangeInput={onChangeInput}
      ></TodoInput>
      <TodoFilter filter={filter} onChangeFilter={onChangeFilter} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} onEdit={onEdit} />
      <TodoFooter onClearAll={onClearAll} />
    </div>
  );
};

export default Todos;
