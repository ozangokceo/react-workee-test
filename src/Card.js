import React, { useEffect, useRef } from 'react';
import './Card.css';
import database from "./database"

function Card(props) {
  let { session } = props  // props destructring
  let sessionCount;
  let sessionCountText;
  let randomNumber = Math.floor(Math.random() * 10)
  //let imgSource;

  let imgSource = "https://source.boringavatars.com/"

  let name = database.name[Math.floor( Math.random() * 100)] ;
  let surname = database.surname[Math.floor( Math.random() * 280)] ;
  let email = `${name.toLowerCase().replace(/\W/g, '')}${surname.toLowerCase().replace(/\W/g, '')}@gmail.com`;

  sessionCount = session[randomNumber]
  sessionCountText = sessionCount === 0 ? "No session.." : `${sessionCount} sessions`

  return (
    <div className="card">
      <img
        alt="avatar"
        className="avatar" 
        src={imgSource}>
      </img>
      <h2 className="name">{name}   {surname} </h2>
      <p className="email">{email}</p>
      <p className="session">{sessionCountText}</p>
    </div>
  );
}

export default Card;