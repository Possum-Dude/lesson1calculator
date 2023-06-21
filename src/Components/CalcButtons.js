import {React, useState} from 'react'
import { LogCalculate, LogValue } from './logs';

import {Calcbutton} from './Allbuttons.js';
import Inputs from './Inputs.js';
import ButtonKeypad from './ButtonKeypad.js';
//rafce
const CalcButtons = () => {

    const[ answer, setAnswer ] = useState("");
const[ first, setFirst] = useState(10);
const[ second, setSecond] = useState(22);

let trigger = false
const keyInput = (value) => {

let symbols = ["+", "-", "*", "/"];
if(symbols.includes(value)) {
  trigger = true
}
if(trigger === false) {
  setFirst(first + String(value)); // concatinates the numbers not adding them 
}
if(trigger === true) {
  setSecond(second + String(value)); // concatinates the numbers not adding them 
}

}




    const Calculate = (value) => {
        LogValue( value);
      
        if (value !== "") {
      
      switch (value) {
      
      case "-": 
      setAnswer(first - second);
      break;
      case"+":
        setAnswer(Number(first + second));
      break;
      case "/":  
      setAnswer(first / second);
      break;
      case "*":  
      setAnswer(first * second);
      break;
      default:  setAnswer("Error");
      }
      LogCalculate(first, second, value);
      
        }
       }
  return (
    <div>
    <Inputs answer = {answer} first = {first} setFirst ={setFirst} second = {second} setSecond ={setSecond} />
         
            <Calcbutton symbol = {"+"} calculate = {Calculate}></Calcbutton>
            <Calcbutton symbol = {"-"} calculate = {Calculate}></Calcbutton>
            <Calcbutton symbol = {"/"} calculate = {Calculate}></Calcbutton>
            <Calcbutton symbol = {"*"} calculate = {Calculate}></Calcbutton>
            <div className='digits'>
              <ButtonKeypad keyInput={keyInput} />
            </div>
         </div>
    )
}


export default CalcButtons