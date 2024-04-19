import {useState} from 'react';

export default function MyHook() {

  var [name, setName] = useState("Guest");

  const updateName = () => {
      setName("sharad");
  };

  var[age,setAge] = useState(0);

  const updateAge = () =>{
    setAge(age+1);
  }

  return (
    <div>
      <p>Name : {name}</p>
       <button onClick={updateName}></button>{" "}
       <p>Age: {age}</p>
       <button onClick={updateAge}>click Me</button>
    </div>
  );
}
