import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./Components/Form/Form.jsx";

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

  const [text, showText] = useState("");

  const handleChange = (event) => {
    showText(event.target.value);
  };

  /*================= 2 binding data type =======================*/

  const [counter, setCounter] = useState(0);

  /*================ array Filter ==============================*/
  const list = ["banna", "grape", "apple", "pear", "orange"];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(list);

      return;
    }
    const filteredValues = list.filter(
      (itemn) =>
        String(item).toLowerCase().indexOf(event.target.value.toLowerCase()) !==
        -1
    );

    setFilterList(filteredValues);
  };

  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  //*===============for Loops ======================*//
  const numbers = [1, 2, 3, 4, 5];
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }

const names =[ 'James', 'Whissely', 'Vivi', 'Fiona']
for(let i=0; i<names.lenght; i++) {
  console.log(names[i])
}
const grade =[ 100, 90, 80, 70, 60, 50, 40,30,20,10 ]
const Score =[100, 90, 80, 70, 60]
for (let i=60; i<grade.length; i++){
  if ( Score %  i >60  ) return false;
}

  //*============== loops ======================*//




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
        <h2>counter button</h2> <p>{counter}</p>
        <div className="test4">
          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            Counter +1
          </button>
        </div>
        <h2>Filter ArrAys</h2>
        <div className="test5">
          <input type="text" name="query" onChange={handleSearch}></input>
          {filterList &&
            filterList.map((item, index) => <div key={index}>{item}</div>)}
        </div>
        <div>
          <h2> count using useEffect</h2>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
        <h2>To do Task list</h2>
        <div className="test6">
          <Form />
        </div>
        <h2> For Loops</h2>
        <div className="test7">
          <span>{numbers}</span>
        </div>
        
        
        <div>
          For loops again
            <div className="test8">
              {names.join (",")}
            </div>

        </div>
              
        <div>
          For loops again
            <div className="test8">
              {grade.join (",")}
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
