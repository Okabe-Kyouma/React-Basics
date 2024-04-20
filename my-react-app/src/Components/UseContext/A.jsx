import { useState,createContext, useRef } from 'react';
import B from './B'
import MyRef from '../List/Hook/MyRef';

export const Usercontext = createContext();

export default function A() {


     const [user,setUser] = useState("Sharad");


  return (
    <div className="box">
        <MyRef></MyRef>
      <h1>A</h1>
      <h2>{`Hello ${user}`}</h2>
      <Usercontext.Provider value={user}>
      <B  user={user}></B>
      </Usercontext.Provider>
    </div>
  );
}
