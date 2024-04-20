import { useState,useEffect,useRef } from "react";

export default function MyRef(){

    const inputRef = useRef(null);


    useEffect(()=>{
        console.log("component rendered");
    })


    function handleClick(){
        ref.current++;
        console.log(ref.current);
    }
    return(
        <div>
        <button onClick={handleClick}>
            Click Me!
        </button>
        <input type="text" ref={inputRef}/>
        </div>
    )

}