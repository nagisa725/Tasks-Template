import { FC, memo } from "react";
import styles from "./index.module.css";

/**
 * text field componentを実装すること
 */

const _TextField: FC = () => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Title</label>
      <input className={styles.input} placeholder="Create New Issue" />
    </div>
  );
};

export const TextField = memo(_TextField);
