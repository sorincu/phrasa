import React from "react";
import styles from "./css/App.module.css";
import Input from "@mui/material/Input";

function App() {
  return (
    <div>
      <div className={styles.bgNavbar}>
        <div className={styles.navbar}>
          <h2 className={styles.logo}>phrasa.</h2>
          <button className={styles.btn}>Coffee</button>
        </div>
      </div>

      <div className={styles.bannerContainer}>
        <h1 className={`${styles.banner} ${styles.primaryColor}`}>
          Listen&#160;
        </h1>
        <h1 className={styles.banner}>closely.&#160;</h1>
        <h1 className={styles.banner}>Repeat.</h1>
      </div>

      <div className={styles.bannerDescriptionContainer}>
        <p className={styles.bannerDescription}>
          Learn from any audio-source by repeating a musical phrase. A tool
          encouraging hands-on practice, supporting you on the road to musical
          proficiency.
        </p>
      </div>

      <div className={styles.buttonContainer}>
        <Input
          label="Search"
          sx={{
            width: "300px",
            color: "white",
            input: {
              color: "white",
            },
          }}
        />
        <button className={styles.btn}>Search</button>
      </div>
    </div>
  );
}

export default App;
