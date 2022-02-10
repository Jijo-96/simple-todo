import { useState } from "react";
import { useSelector } from "react-redux";
import { MdArrowRight } from "react-icons/md";
import { RiArrowDropDownFill } from "react-icons/ri";

import styles from "./TodoList.module.css";

const TodoList = ({ toggleArrow, setToggleArrow }) => {
  const todos = useSelector((state) => state.todos);
  return (
    <div className={styles.todo__list}>
      {todos.map((data) => (
        <div className={styles.todo} key={data.id}>
          {!toggleArrow ? (
            <MdArrowRight
              className={styles.dropdown}
              style={{ fontSize: "2rem" }}
            />
          ) : (
            <RiArrowDropDownFill style={{ fontSize: "2.8rem" }} />
          )}

          <h5>{data.task}</h5>
            {/* onClick={() => setToggleArrow(!toggleArrow)} */}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
