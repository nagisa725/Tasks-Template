import { FC, memo } from "react";
import styles from "./index.module.css";

const _TextArea: FC = () => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Description</label>
      <textarea className={styles.text__area} placeholder="Create New Issue" />
    </div>
  );
};

export const TextArea = memo(_TextArea);
