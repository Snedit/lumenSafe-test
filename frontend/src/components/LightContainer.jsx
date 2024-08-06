import React from "react";
import styles from "./LightContainer.module.css";

const LightContainer = () => {
  return (
    <div className={styles.lightContainer}>
      <div className={styles.sun}></div>
      <div className={styles.ray_box}>
        <div className={`${styles.ray} ${styles.ray1}`}></div>
        <div className={`${styles.ray} ${styles.ray2}`}></div>
        <div className={`${styles.ray} ${styles.ray3}`}></div>
        <div className={`${styles.ray} ${styles.ray4}`}></div>
        <div className={`${styles.ray} ${styles.ray5}`}></div>
        <div className={`${styles.ray} ${styles.ray6}`}></div>
        <div className={`${styles.ray} ${styles.ray7}`}></div>
        <div className={`${styles.ray} ${styles.ray8}`}></div>
        <div className={`${styles.ray} ${styles.ray9}`}></div>
        <div className={`${styles.ray} ${styles.ray10}`}></div>
      </div>
      <div id={styles.cloud_one}></div>
      <div id={styles.cloud_two}></div>
      <div id={styles.cloud_three}></div>
      <div id={styles.lighthut}>
        <div id={styles.cells}></div>
        <div id={styles.cap}></div>
        <div id={styles.door}></div>
      </div>
    </div>
  );
};

export default LightContainer;
