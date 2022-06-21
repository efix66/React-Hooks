import React from "react";
import { useState } from "react";

const UseStateArray = () => {
	const [items, setItems] = useState([]);

	const addItem = () => {
		setItems([
			...items,
			{
				id: items.length,
				value: Math.floor(Math.random() * 10) + 1,
			},
		]);
	};
	return (
		<div>
			<button onClick={addItem}>Add a number</button>
			{items.map((item) => (
				<li key={item.id}>{item.value}</li>
			))}
		</div>
	);
};

export default UseStateArray;
