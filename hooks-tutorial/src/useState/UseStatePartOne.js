import React from "react";
import { useState } from "react";

const UseStatePartOne = () => {
	const [count, setCount] = useState(0);
	const [enterdText, setEnteredText] = useState("");

	return (
		<div>
			<div>{count}</div>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Increment
			</button>

			<div>
				<input
					type="text"
					placeholder="Name..."
					onChange={(e) => setEnteredText(e.target.value)}
					value={enterdText}
				/>
				<h1>{enterdText}</h1>
			</div>
		</div>
	);
};

export default UseStatePartOne;
