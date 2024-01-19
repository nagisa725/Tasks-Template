import { FC, memo } from "react";
import styles from "./index.module.css";

const _Select: FC = () => {
  return (
    <div className={styles.root}>
      <label htmlFor="priority-select">Choose a Priority:</label>
      <select className={styles.select} name="priorities" id="priority-select">
        <option value="">--Please choose an option--</option>
        <option value="high">HIGH</option>
        <option value="medium">MEDIUM</option>
        <option value="low">LOW</option>
      </select>
    </div>
  );
};

export const Select = memo(_Select);
