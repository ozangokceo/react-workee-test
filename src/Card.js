import React, { useEffect, useState }  from 'react';
import './Card.css';
import database from './database'
import EditImg from './EditImg'

function Card(props) {

  let mouseHoverState = true;

  function setMouseHoverState(a) {
    if(a) { mouseHoverState = true }
    if(!a) { mouseHoverState = false }
  }

  let { session } = props  // props destructring
  let sessionCountText;
  let sessionCount;
  let randomNumberSession = Math.floor(Math.random() * 10)


  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  let imgSource = `https://source.boringavatars.com/marble/colors=${randomColor}?square`

  let name = database.name[Math.floor( Math.random() * 100)] ;
  let surname = database.surname[Math.floor( Math.random() * 280)] ;
  let email = `${name.toLowerCase().replace(/\W/g, '')}${surname.toLowerCase().replace(/\W/g, '')}@gmail.com`;

  sessionCount = session[randomNumberSession]
  sessionCountText = sessionCount === 0 ? "No session.." : `${sessionCount} sessions`

  useEffect(() => {

  }, []);

  return (
    <div className="card" onMouseEnter={() => setMouseHoverState(true)} onMouseLeave={setMouseHoverState(false)}>
      <img
        alt="avatar"
        className="avatar" 
        src={imgSource}>
      </img>
      <h2 className="name">{name}   {surname} </h2>
      <p className="email">{email}</p>
      <p className="session">{sessionCountText}</p>
      <EditImg mouseHoverState={mouseHoverState}/>
    </div>
  );
}

export default Card;