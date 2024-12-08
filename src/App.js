import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Result from './Result';


function App() {
  const [term,setTerm]=useState("")
  const [ComNum,SetComNum]=useState(Math.floor(Math.random() * 10 ) +1);


  const handleChange = (e) =>{
    setTerm (e.target.value);
  }
  const handleReset = () => {
    SetComNum(Math.floor(Math.random() * 10 ) +1); 
    setTerm('')
  }
  

  return (
    <div className="Container">
        <div class="head">
            <label htmlFor='term'>
              Guess the numbet between 1 to 10 
            </label> <br />
            <input 
                  value={term}
                  id='term' 
                  type='text'
                  name='term'
                  onChange={handleChange}
            />
        </div>
        <Result ComNum = {ComNum} term = {term} />
        <button id='js-Reset-btn' onClick={handleReset}>Reset</button>

    </div>
  );
}

export default App;
