import { useState } from "react";
import { useDispatch } from "react-redux";
import { BsPlusCircle } from "react-icons/bs";

import { addTodo } from "../../features/todoSlice";

import styles from "./AddTask.module.css";
import TodoList from "../TodoList/TodoList";

const AddTask = () => {
  const [value, setValue] = useState("");
  const [toggleArrow, setToggleArrow] = useState(false);
  console.log(toggleArrow);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        task: value,
      })
    );
  };

  return (
    <div className={styles.task_container}>
      <form className={styles.add__task__container} onSubmit={handleSubmit}>
        <BsPlusCircle style={{ marginRight: "0.55rem", fontSize: "1.4rem" }} />
        <input
          className={styles.add__task}
          type="text"
          placeholder="Add new task"
          autoComplete="off"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <div className={styles.todo__data}>
        <TodoList setToggleArrow={setToggleArrow} toggleArrow={toggleArrow}/>
      </div>
    </div>
  );
};

export default AddTask;
