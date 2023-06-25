import {React, useState} from 'react'
import { LogCalculate, LogValue } from './logs';
import {Calcbutton} from './Allbuttons.js';
import Inputs from './Inputs.js';
import ButtonKeypad from './ButtonKeypad.js';
//rafce
const CalcButtons = () => {

    const[ answer, setAnswer ] = useState("");
const[ first, setFirst] = useState(0);
const[ second, setSecond] = useState(0);
const[ trigger, setTrigger] =useState( false);
const[ operation, setOperation] = useState("");
  
    //123=567
    const keyInput = (value) => {
      console.log(value + " " + trigger)
            
            if(trigger === false) {
              setFirst(Number(first + String(value)));
              //concatinate the numbers then save as number
              console.log("first value", value);
            }
            if(trigger === true) {
              setSecond(Number(second + String(value))); // concatinates the numbers then saves as a number 
            }
          }


// value = = - / *
    const Calculate = (value) => {
         setTrigger(true);
         console.log("trigger run", value + " " + trigger);

         let symbols =["+", "-", "*", "/"];
         if (symbols.includes(value)) {
          setOperation(value);
         }

      
        if (value == "=") {
      
      switch (operation) {
      
      case "-": 
      setAnswer(" = " +(Number(first - second)));
      break;
      case"+":
        setAnswer(" = " +(Number(first + second)));
      break;
      case "/":  
      setAnswer(" = " +(Number(first / second)));
      break;
      case "*":  
      setAnswer(" = " +(Number(first * second)));
      break;
      default:  setAnswer("Error");
      }
      setTrigger(false);
      
        }
       }
  return (
            <div>
              <Inputs first={first} second={second} operation={operation} answer={answer} ></Inputs>
              <Calcbutton symbol = {"+"} calculate = {Calculate}></Calcbutton>
              <Calcbutton symbol = {"-"} calculate = {Calculate}></Calcbutton>
              <Calcbutton symbol = {"/"} calculate = {Calculate}></Calcbutton>
              <Calcbutton symbol = {"*"} calculate = {Calculate}></Calcbutton>
              <Calcbutton symbol = {"="} calculate = {Calculate}></Calcbutton>
              <div className='digits'>
                <ButtonKeypad keyInput={keyInput} />
              </div>
            </div>
    )
}


export default CalcButtons