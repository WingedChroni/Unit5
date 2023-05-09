import React, { useEffect, useState, useContext } from "react";
import "./Checkout.css";
import { LikesContext } from "../../context/LikesContext";
import PurchaseCard from "../../Components/PurchaseCard/PurchaseCard";
import Modal from "react-modal";
import { Link } from "react-router-dom";

function Checkout() {
	const { likes, removeItem } = useContext(LikesContext);

	const [products, setProducts] = useState([]);

	const [total, setTotal] = useState(0);

	const [isOpen, setIsOpen] = React.useState(false);

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

	// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
	Modal.setAppElement(document.getElementById("root"));

	useEffect(() => {
		setProducts(likes);
	}, []);

	useEffect(() => {
		setProducts(likes);
		let temp = 0;
		for (let items of likes) {
			console.log(items);
			temp += items.price;
		}
		console.log(`temp is ${temp}`);
		setTotal(temp);
	}, [likes]);

	const backToMain = () => {
		<Link to="/"></Link>;
		setIsOpen(false);
	};

	return (
		<div className="checkout-container">
			<div className="headers">
				<p>Item</p>
				<p>Price</p>
				<p>Quantity</p>
				<p>Remove</p>
			</div>
			<div className="purchase-container">
				{console.log("check 123")}
				{console.log(products)}
				{
					// console.log("done");
					products.map((product) => (
						<PurchaseCard key={product.id} product={product} />
					))
				}
			</div>
			<div className="total-container">
				<p>Total </p>
				<p>{total}€</p>
			</div>
			<div className="checkout-button-container">
				<button onClick={() => setIsOpen(true)}>Checkout</button>
			</div>
			<Modal
				isOpen={isOpen}
				onRequestClose={() => setIsOpen(false)}
				style={customStyles}
				contentLabel="Contact Us Modal"
			>
				<div className="popup">
					<h2>Your Order was Successful!</h2>
					<h2>
						Check your email for the order confirmation. Thank you for shopping
						with Fake Store!
					</h2>
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
		</div>
	);
}

export default Checkout;
