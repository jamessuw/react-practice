import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";




/*================= mapping rendering data =======================*/

function App() {
  const item = [
    {
      name: "james",
      age: "25",
      born: "1998",
    },
    {
      name: "vivi",
      age: "26",
      born: "1997",
    },
    {
      name: "whissely",
      age: "18",
      born: "2003",
    },
  ];

const myList = item.map((person) => (
    <li>
      {person.name} | {person.age} | {person.born}
    </li>
  ));
  /*================= toglle show and hide button =======================*/

  const [show, setShow] = useState(true);

  /*================= 2 binding data type =======================*/

const [text, showText] = useState ('');

const handleChange = (event) => {
  showText(event.target.value);
};

const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Start Practice</h1>
        <h2>Array map</h2>
        <div className="test">{myList}</div>

        <h2>show and hide</h2>
        <div className="test2">
          <button onClick={() => setShow(!show)}>
            {" "}
            {show ? "show toggle" : "hide toggle"}{" "}
          </button>

          {show && <span>test shown</span>}
        </div>

        <h2> 2 ways data Binding</h2>

        <div className="test3">
          <input type="text" onChange={handleChange} value={text}></input>
    <p>type:{text}</p>
        </div>


<h2>counter button</h2>
<div className="test4">
  <button onClick={() => {setCounter(counter +1)}}>Counter +1</button>
 <p>{counter}</p>
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
