import { useState } from "react";
export default function OnChange() {
  const [name, setName] = useState("Guest");
  const [quant, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping,setShipping] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantitychange = (event) => {
    setQuantity(event.target.value);
  };

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handlePayment = (event) => {
    setPayment(event.target.value);
  };

  const handleShip = (event) =>{
    setShipping(event.target.value);
  }

  return (
    <div>
      <label htmlFor="Name">Please enter your name:</label>
      <br />
      <input
        className="Name"
        type="text"
        value={name}
        onChange={(event) => {
          handleNameChange(event);
        }}
      />
      <p>Name: {name}</p>
      <label htmlFor="Quant">Please enter item quantity:</label>
      <br />
      <input
        type="number"
        className="Quant"
        value={quant}
        onChange={(event) => {
          handleQuantitychange(event);
        }}
      />
      <p>Quantity: {quant}</p>
      <label htmlFor="">Please enter delivery Instructions</label><br />
      <textarea
        name="area"
        id="textArea"
        cols="20"
        rows="2"
        placeholder="Enter Delivery instructions"
        onChange={(event) => {
          handleComment(event);
        }}
      ></textarea>
      <p>Comment : {comment}</p>
      <label htmlFor="">Select Payment Mode</label><br />
      <select
        name="pay"
        id="payment"
        onChange={(event) => {
          handlePayment(event);
        }}
      >
        <option value="">Select an Option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="GiftCard">GitfCard</option>
        <option value="DebitCard">DebitCard</option>
        <option value="CreditCard">Creditcard</option>
      </select>
      <p>Payment Mode: {payment}</p>
       <label htmlFor="">Select Delivery option</label><br />
       <input type="radio" value="Pick up" checked={shipping=="Pick Up"} onChange={(event)=>{handleShip(event)}} />
       Pick UP <br />
       <input type="radio" value="Shared" checked={shipping=="shared"} onChange={(event)=> {handleShip(event)}} />
       shared <br />
       <p>Delivery type: {shipping}</p>
    </div>
  );
}
