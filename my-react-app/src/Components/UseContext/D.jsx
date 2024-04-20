import { Usercontext } from "./A";
import { useContext } from "react";

export default function D() {

    const user = useContext(Usercontext);


    return (
      <div className="box">
        <h1>D</h1>
        <h2>{`Bye ${user}`}</h2>
      </div>
    );
  }
  