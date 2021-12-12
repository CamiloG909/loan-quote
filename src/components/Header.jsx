import React from "react";
import logo from "../assets/img/logo192.png";

const Header = ({ title }) => (
	<header
		className="header"
		onClick={() => {
			window.location.reload();
		}}
	>
		<img className="header__img" src={logo} alt="Logo header"></img>
		<h1 className="header__title">{title}</h1>
	</header>
);

export default Header;
