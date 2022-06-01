import React, { useState, useEffect } from "react";

const HookMouse = () => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	useEffect(() => {
		console.log("Effect called");
		window.addEventListener("mousemove", logMousePosition);

		//Eliminarea codului dupa demontarea Componentei (cleanup)
		return () => {
			console.log("Code unmount");
			window.removeEventListener("mousemove", logMousePosition);
		};
	}, []);

	const logMousePosition = (e) => {
		console.log("Mouse Move");
		setX(e.clientX);
		setY(e.clientY);
	};

	return (
		<div>
			Hooks X - {x} Y - {y}
		</div>
	);
};

export default HookMouse;
