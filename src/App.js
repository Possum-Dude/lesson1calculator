import logo from './logo.svg';
import './App.css';
import { useState } from'react';


const App = (props) => {


const[ x, setX ] = useState(0);
const[ answer, setAnswer ] = useState("");
const[ first, setFirst] = useState(10);
const[ second, setSecond] = useState(22);

const Calculate = (value) => {
  console.log("what is value?", value);

  if (value !== "") {

switch (value) {

case "-": 
setAnswer(first - second);
break;
case"+":  setAnswer(first + second);
break;
case "/":  setAnswer(first / second);
break;
case "*":  setAnswer(first * second);
break;
default:  setAnswer("Error");
}


  }
}

var Add = (x) =>{
  x=x+1;
  console.log(x);
  setX(x);
  return x;
}

  return (
    <div className="App">



      <header className="App-header">
        <h1>Simple Calculator</h1>
        <input type="number"
         value={Number(first)}
          onChange={(e) => setFirst(e.target.value)}/>

          <input type="number"
         value={Number(second)}
          onChange={(e) => setSecond(e.target.value)}/>  

          <input type="number" defaultValue={answer}/> 
         <div><button className='Addbutton' onClick={() =>Calculate("+")}>+</button>
         <button className='Addbutton' onClick={() =>Calculate("-")}>-</button>
         <button className='Addbutton' onClick={() =>Calculate("/")}>/</button>
         <button className='Addbutton' onClick={() =>Calculate("*")}>*</button></div>

        <button className="Addbutton" onClick={() => Add(x)}>
  Add 1 to x
</button>
      </header>
    </div>
  );
}

export default App;
