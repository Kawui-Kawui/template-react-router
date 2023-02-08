import "./App.css";
import React, { useEffect, useState } from "react";
//import { useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  return (
    <div className="App">
      <p>Hello</p>
    </div>
  );
}

/*function ButttonState() {
  const [title, setTitle] = useState("")
  const [count, setCount] = useState(0)

  const updateTitleClicked = () => {
    setTitle("We now have title")
  }

  const updateCountClicked = () => {
    setCount(count + 1)
  }


  return (
    <div>
      <Data title={title} count={count} />
      <button onClick={updateTitleClicked}>Update title</button>
      <button onClick={updateCountClicked}>Update counter</button>
    </div>
  )
}

function Data(props) {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Count: {props.count}</p>
    </div>
  )
}*/

export default App;
