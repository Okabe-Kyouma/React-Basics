import { useState } from "react";
import styles from "./Color.module.css";
export default function Color() {
  const defColor = "#48f2fe";

  var [code, setColor] = useState(defColor);

  const onColorChange = (event) => {
    setColor(event.target.value);
  };

  const styleBgColor = {
    backgroundColor: code,
  };

  return (
    <div className={styles.main}>
      <h1>Color Picker</h1>
      <div className={styles.box} style={styleBgColor}>
        <p>Selected Color:</p>
        <p>{code}</p>
      </div>
      <h4>Select a Color:</h4>
      <input
        type="color"
        value={code}
        onChange={(event) => {
          onColorChange(event);
        }}
      />
    </div>
  );
}
