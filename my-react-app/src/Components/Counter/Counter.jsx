import styles from "./Counter.module.css";
import {useState} from 'react';
export default function Counter() {
  
  var [count,setCount] = useState(0);

  const increnment = () => {
       setCount(count+1);
  }

  const reset = () => {
         setCount(0);
  }

  const decrenment = ()=> {
       setCount(count>0 ? count-1 : count);
  }

  return (
    <div className={styles.counterDiv}>
      <h1 className={styles.count}>{count}</h1>
      <div className={styles.buttonDiv}>
          <button onClick={increnment}>Increnment</button>
          <button onClick={reset}>Reset</button>
          <button onClick={decrenment}>Decrenment</button>
      </div>
    </div>
  );
}
