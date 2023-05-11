import React from "react";
import "./Footer.css";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div className="footer-container">
			<p>
				Made with <AiFillHeart /> by mimo
			</p>
			<Link to="/contact">Contact Us</Link>
		</div>
	);
}

export default Footer;
