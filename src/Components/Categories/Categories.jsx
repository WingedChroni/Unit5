import React from "react";
import "./Categories.css";
import axios from "axios";

function Categories({ category, setProducts }) {
	function getProducts() {
		let link = "";
		if (category != "All") {
			link = `category/${category}`;
		}
		axios
			.get(`https://fakestoreapi.com/products/${link}`)
			.then((res) => {
				setProducts(res.data);
			})
			.catch((err) => console.log(err));
	}

	return (
		<div className="category">
			{/* Categories */}
			<p onClick={getProducts}>{category}</p>
		</div>
	);
}

export default Categories;
