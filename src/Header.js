import React, { useState } from "react";
import "./Header.css"
import plus from './plus_icon.png'

function Header(props) {

  return (
		<div id="header">
			<h1 id="contactHeader">Contacts</h1>
			<button id="addNewButton" >
				<img src={plus} alt="plus" id="plus"/>Create New
			</button>
		</div>
  );
}
  
  export default Header;
  