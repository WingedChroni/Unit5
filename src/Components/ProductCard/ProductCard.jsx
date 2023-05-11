import React, { useState, useEffect, useContext } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LikesContext } from "../../context/LikesContext";

function ProductCard({ product }) {
	const { likes, addItem, removeItem } = useContext(LikesContext);

	const [liked, setLiked] = useState(false);

	useEffect(() => {
		setLiked(likes.find((item) => item.id === product.id));
	}, [likes]);

	return (
		<div className="product-card">
			<div className="image-container">
				<Link to={`/product/${product.id}/details`}>
					<img src={product.image} alt="" />
				</Link>
				<div className="heart-container">
					{liked ? (
						<FaHeart
							className="heart-icon"
							onClick={() => removeItem(product.id)}
						/>
					) : (
						<FaRegHeart
							className="heart-icon"
							onClick={() => addItem(product)}
						/>
					)}
				</div>
			</div>
			<div className="product-overview">
				<p>{product.title}</p>
				<p>{product.category}</p>
				<p>{product.price}€</p>
			</div>
		</div>
	);
}

export default ProductCard;
