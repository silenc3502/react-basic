import React from "react";
import styles from "../Todo.module.css";

const TodoFilter = ({ filter, onChangeFilter }) => {
  const handleFilter = (e) => onChangeFilter(e.target.value);
  
  return (
    <div className={styles.filter}>
      <input
        type="radio"
        value="ALL"
        checked={filter === "ALL"}
        onChange={handleFilter}
      />
      전체
      <input
        type="radio"
        value="A"
        checked={filter === "A"}
        onChange={handleFilter}
      />
      미완료
      <input
        type="radio"
        value="B"
        checked={filter === "B"}
        onChange={handleFilter}
      />
      완료
    </div>
  );
};

export default TodoFilter;
