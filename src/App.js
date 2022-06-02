import styles from "./css/App.module.css";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className={styles.buttonContainer}>
      <Button color="info" variant="contained" size="large">
        Import From Youtube
      </Button>
      
      <Button color="info" variant="contained" size="large">
        Audiofile
      </Button>
    </div>
  );
}

export default App;
