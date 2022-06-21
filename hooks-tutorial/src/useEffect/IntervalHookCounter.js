import React, { useState, useEffect } from "react";

const IntervalHookCounter = () => {
	const [count, setCount] = useState(0);

	const tick = () => {
		setCount((prevCount) => prevCount + 1);
	};

	useEffect(() => {
		function doSomething() {
			console.log("Some prop");
		}
		doSomething();
		const interval = setInterval(tick, 2000);

		return () => {
			clearInterval(interval);
		};
	}, [count]);

	return <div>{count}</div>;
};

export default IntervalHookCounter;
