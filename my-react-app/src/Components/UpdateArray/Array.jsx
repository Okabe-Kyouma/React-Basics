import {useState}  from 'react';

export default function Array(){

    const [foods,setFoods] = useState([]);

   const list = foods.map((food,index)=> <li key={index} onClick={()=>{remove(index)}} >{food}</li>)

   var newItem = null;

   const remove = (index) => {

      setFoods(foods.filter((_,i)=> i!== index))
   }

   const addFood = ()=>{
    console.log(newItem);
      setFoods(f => [...f,newItem]);
   }

   const getValue = (event)=>{
      newItem = event.target.value;
   }

    return(<div>
        <h2>Your Food Items</h2>
        <ul>{list}</ul>
        <input type="text" placeholder='Enter Food name' onChange={(event)=>{getValue(event)}}  />
        <button onClick={()=>{addFood()}}>Add Food</button>
    </div>);

}