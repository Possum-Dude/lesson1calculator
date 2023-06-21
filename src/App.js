import logo from './logo.svg';
import './App.css';
import { useState } from'react';
import CalcButtons from './Components/CalcButtons'

const App = (props) => {





const[ x, setX ] = useState(0);






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
        
        <CalcButtons></CalcButtons>

        {/* <button className="Addbutton" onClick={() => Add(x)}>
  Add 1 to x
</button> */}
      </header>
    </div>
    
  );
}

export default App;
