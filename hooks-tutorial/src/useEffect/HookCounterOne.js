import React, { useState, useEffect } from "react";

const HookCounterOne = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");

	useEffect(() => {
		console.log("UseEffect - Updating document title");
		document.title = `You clicked ${count} times`;
	}, [count]);
	// useEffect va fi executat doar cand valuare count se schimba
	// rulare  efect conditionat

	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Click {count} times
			</button>
		</div>
	);
};

export default HookCounterOne;
