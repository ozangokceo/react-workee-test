import React from "react";
import "./Header.css"
import plus from './plus_icon.png'

function Header() {
  return (
		<div id="header">
			<h1 id="contactHeader">Contacts</h1>
			<button id="addNewButton">
				<img src={plus} alt="plus" id="plus"></img>Create New</button>
		</div>
  );
}
  
  export default Header;
  