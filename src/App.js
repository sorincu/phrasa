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

      <div className={styles.buttonContainer}>
        <Button color="info" variant="contained" size="large">
          Import From Youtube
        </Button>

        <Button color="info" variant="contained" size="large">
          Audiofile
        </Button>
      </div>
    </div>
  );
}

export default App;
