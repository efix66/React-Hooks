import React, { createContext, useContext, useState, useEffect } from "react";

const TheUserName = createContext("Unknown");

const UserContext2 = () => {
	const [userName, setUserName] = useState("Andries Felix");

	useEffect(() => {
		setInterval(() => {
			setUserName("Felix, Andries Felix");
		}, 2000);
	}, []);

	return (
		<TheUserName.Provider value={userName}>
			The User Name is :
			<Layout />
		</TheUserName.Provider>
	);
};

const Layout = ({ children }) => {
	return (
		<div>
			{children}
			<Header />
		</div>
	);
};

const Header = () => {
	return (
		<header>
			<UserInfo />
		</header>
	);
};

const UserInfo = () => {
	const userName = useContext(TheUserName);
	return <h1>{userName}</h1>;
};

export default UserContext2;
