import React, { useState, useEffect, useContext } from "react";
import "./PurchaseCard.css";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { LikesContext } from "../../context/LikesContext";

function PurchaseCard({ product }) {
	const { likes, addItem, removeItem } = useContext(LikesContext);

	return (
		<div className="purchase-card">
			<div className="purchase-info-container">
				<div className="preview-container">
					<Link to={`/product/${product.id}/details`}>
						<img src={product.image} alt="" />
					</Link>
				</div>
				<div className="product-name-container">
					<p>{product.title}</p>
				</div>
				<p>{product.price}€</p>
				<p>1</p>
			</div>
			<BsTrash className="trash-icon" onClick={() => removeItem(product.id)} />
		</div>
	);
}

export default PurchaseCard;
