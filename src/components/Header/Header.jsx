import React from "react";
import { Link } from "react-router-dom";
import favicon from "../../images/favicon.jpg";
import "./header.css";

const Header = () => {
	return (
		<header className="header">
			<div className="header-left">
				<Link className="header-left-image" to="/">
					<img src={favicon} alt="Scholorshipopolis" />
				</Link>
			</div>
			<div className="header-right">
				<ul className="header-right-nav__ul">
					<li className="header-right-nav__li">
						<Link to="/about">About Us</Link>
					</li>
					<li className="header-right-nav__li">
						<Link to="/about">Check Eligibility</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
