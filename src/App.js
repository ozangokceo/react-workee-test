import React, { useEffect, useRef, useState } from 'react';
import Card from "./Card";
import Header from "./Header";
import "./App.css";


function App() {
  const [count, setCount] = useState(10);

  function countChange() {
    setCount(count + 1);
  }

  const listKeys = [];
  let sessionArray = []

  for (let i = 0; i < count; i++) {
    listKeys.push(i);
  }

  for (let i = 0; i < count; i++) {
    sessionArray.push(Math.floor( Math.random() * 20))
  }
  return (
    <div id="main">
      <Header />
      {listKeys.map(i => {
        return <Card key={i} session={sessionArray} />
      })}
    </div>
  );
}

export default App;
