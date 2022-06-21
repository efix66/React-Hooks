import React, { useState, useReducer } from "react";

const CounterExample2 = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const decrement = () => {
		setCount((prevCount) => prevCount - 1);
	};

	const reset = () => {
		setCount(0);
	};

	return (
		<div>
			<button onClick={increment}>Increment +</button>
			<button onClick={decrement}>Decrement -</button>
			<button onClick={reset}>Reset </button>
			<h2>{count}</h2>
		</div>
	);
};

export default CounterExample2;
