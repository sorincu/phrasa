import styles from "./css/App.module.css";
import Button from "@mui/material/Button";

function App() {
  return (
    <div>
      <div className={styles.bgNavbar}>
        <div className={styles.navbar}>
          <h2 className={styles.logo}>phrasa.</h2>
        </div>
      </div>

      <div className={styles.bannerContainer}>
        <h1 className={`${styles.banner} ${styles.primaryColor}`}>Listen.&#160;</h1>
        <h1 className={styles.banner}>Experience.&#160;</h1>
        <h1 className={styles.banner}>Repeat.</h1>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.btn}>
          Import From Youtube
        </button>

        <button className={styles.btn}>
          Audiofile
        </button>
      </div>
    </div>
  );
}

export default App;
