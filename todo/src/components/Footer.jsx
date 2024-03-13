import React from "react";
import styles from "./footer.module.css";

export default function Footer({ completedtodos, totaltodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Total Todos: {totaltodos}</span>
      <span className={styles.item}>Completed Todos: {completedtodos}</span>
    </div>
  );
}
