import { FC, ReactNode, memo } from "react";
import { Inter } from "next/font/google";
import styles from "./index.module.css";
const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
};

const _Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>TODO APP</h1>
      </header>
      <main className={`${styles.main} ${inter.className}`}>{children}</main>
      <footer className={styles.footer}></footer>
    </>
  );
};

export const Layout = memo(_Layout);
