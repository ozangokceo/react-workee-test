import React from "react";
import Card from "./Card";
import Header from "./Header";
import "./App.css";


function App() {
  let cardCount = 10;
  const listKeys = [];
  let sessionArray = []

  for (let i = 0; i < cardCount; i++) {
    listKeys.push(i);
  }

  for (let i = 0; i < cardCount; i++) {
    sessionArray.push(Math.floor( Math.random() * 20))
  }

  console.log(sessionArray)
  return (
    <div id="main">
      <Header/>
      {listKeys.map(i => {
        return <Card key={i} session={sessionArray} />
      })}
    </div>
  );
}

export default App;
