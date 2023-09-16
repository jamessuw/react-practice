import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



function App() {

const item = [{
  

  name:"james",
  age:"25",
  born:"1998",
},
{
name:"vivi",
  age:"26",
  born:"1997",


},
{
name:"whissely",
  age:"18",
  born:"2003",

},
];

const myList = item.map((person) => <li>{person.name} | {person.age} | {person.born}</li>

);

const [show, setShow] = useState (true);

const [inputValue, setInputValue] = useState('');


const handleInputChange = (event) => {
  setInputValue(event.target.value);
};
 


  return (
    <div className="App">
      <header className="App-header">
        <h1>
       Start Practice
        </h1>
<h2>Array map</h2>
<div className='test'>{myList}</div>


<h2>show and hide</h2>
<div className='test2'>

<button onClick={() => setShow(!show)}> { show ? "show toggle" : "hide toggle"} </button>

{show && <span>test shown</span>}

</div>



<h2> 2 wyas data Binding</h2>


<div className='test3'>

<div>
      {/* Controlled input element */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />

      {/* Display the current input value */}
      <p>Input Value: {inputValue}</p>
    </div>

  
</div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
