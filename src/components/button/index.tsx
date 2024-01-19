import { FC, memo } from "react";
import styles from "./index.module.css";

type Props = {
  title: string;
};
const _Button: FC<Props> = ({ title }) => {
  return <button className={styles.button}>{title}</button>;
};

export const Button = memo(_Button);
