/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'; 

export default function List(props) {
  

  // fruits.sort((a,b)=> a.name.localeCompare(b.name));
  // fruits.sort((a,b)=> a.calories - b.calories);

  if(props.list.length>=1){

  const category = props.category;

  const lowCalFruit = props.list.filter((fruit) => fruit.calories < 100);

  const listItems = lowCalFruit.map((lowCalFruit) => (
    <li key={lowCalFruit.id}>
      {lowCalFruit.name} : &nbsp; <b>{lowCalFruit.calories}</b>
    </li>
  ));

  return(
    <>
    <h2 className="list-category">{category}</h2>
    <ol className="list-items">{listItems}</ol>
    </>
  );
  

}
else{
  return(<></>);
}
  


}

List.PropTypes ={
   category : PropTypes.string,
   list : PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
  name : PropTypes.string,calories : PropTypes.number})),
}

List.defaultProps = {
  category : "Category",
  list : [],
}
