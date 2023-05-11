import React, { useState } from "react";
import "./Contact.css";
import Modal from "react-modal";
import { Link } from "react-router-dom";

function Contact() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [message, setMessage] = useState("");

	const [isOpen, setIsOpen] = useState(false);

	const submit = (e) => {
		e.preventDefault();
		setIsOpen(true);
	};

	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
		},
		overlay: {
			backgroundColor: "rgba(255,255,255,0.6)",
		},
	};

	Modal.setAppElement(document.getElementById("root"));

	return (
		<div className="contact-container">
			<h2>Contact Us</h2>
			<form onSubmit={submit}>
				{/* <label htmlFor="firstName">First Name</label> */}
				<input
					type="text"
					id="firstName"
					placeholder="First Name"
					onChange={(e) => setFirstName(e.target.value)}
				/>

				{/* <label htmlFor="lastName">Last Name</label> */}
				<input
					type="lastName"
					id="lastName"
					placeholder="Last Name"
					onChange={(e) => setLastName(e.target.value)}
				/>

				{/* <label htmlFor="message">Message</label> */}
				<textarea
					id="message"
					rows="4"
					placeholder="Write your message here"
					onChange={(e) => setMessage(e.target.value)}
				></textarea>
				<button type="submit">Submit</button>

				<Modal
					isOpen={isOpen}
					onRequestClose={() => setIsOpen(false)}
					style={customStyles}
					contentLabel="Contact Us Modal"
				>
					<div className="popup">
						<h2>
							Thank you {firstName} {lastName}
						</h2>
						<h2>Your message of "{message}" was received!</h2>
						<Link to="/">
							{/* Button and OnClick might be unnecessary with Link */}
							<button
								className="modal-close-btn"
								onClick={() => setIsOpen(false)}
							>
								Return to Main Page
							</button>
						</Link>
					</div>
				</Modal>
			</form>
		</div>
	);
}

export default Contact;
