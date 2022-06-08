import React from "react";
import { createContext, useContext } from "react";

// 1 Crearea contextului
const Context = createContext("Defaul value");

const Component1 = () => {
	const value = "This is the context Value";
	return (
		<>
			{/* 2 Furnizarea contextului */}
			<Context.Provider value={value}>
				<MyComponent />
			</Context.Provider>
		</>
	);
};

const MyComponent = () => {
	// Consumarea Contextului
	const value = useContext(Context);
	return (
		<>
			<h1>{value}</h1>
		</>
	);
};

export default Component1;
