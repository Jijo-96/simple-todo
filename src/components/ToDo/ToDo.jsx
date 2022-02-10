import { BiSearch } from "react-icons/bi";
import styles from "./ToDo.module.css";

import AddTask from "../AddTask/AddTask";

const ToDo = () => {
  return(
    <div className={styles.todo}>
      <div className={styles.todo__header}>
        <div className={styles.todo__title__container}>
           <h3 className={styles.todo__title}>My <span className={styles.highlight}>To</span>-do List</h3>
        </div>
        <div className={styles.todo__search__container}>
          <BiSearch className={styles.search__icon}/>
          <input className={styles.todo__search} type="search" placeholder="search tasks here..."/>
        </div>
      </div>
      <div className={styles.todo__body}>
        <AddTask />
      </div>
    </div>
  );
};

export default ToDo;