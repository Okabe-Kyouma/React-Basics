import {useState,useEffect} from 'react';
export default function UseEffect(){

     const [count,setCount] = useState(0);
     const [color,setcolor] = useState("green");
     const [width,setWidth] = useState(window.innerWidth);
     const [height,setHeight]  = useState(window.innerHeight);

     const screen = window.screen.width;

     useEffect(()=>{
         document.title =  `Count: ${count} ${color}; ${screen}`
         window.addEventListener("resize",handleResize);

         return()=>{
            //cleanup code.
            window.removeEventListener("resize",handleResize);
            
         }

     },[]);

     const handleClick = () =>{
        setCount(c=>c+1);
     }

     const minus = () =>{
        setCount(c=>c-1);
     }

     const changeColor = () =>{
        setcolor(c=> c==="green" ? "red" : "green");
     }

    

     const handleResize = ()=>{
           setWidth(window.innerWidth);
           setHeight(window.innerHeight);
     }

     


    return (<>
    <p style={{color:color}} >Count: {count}</p>
    <button onClick={handleClick}>Add</button>
    <button onClick={minus}>Sub</button><br />
    <button onClick={changeColor}>Change color</button>
    <p>Window width: {width}px</p>
    <p>Window Height: {height}px</p>
    </>);
}