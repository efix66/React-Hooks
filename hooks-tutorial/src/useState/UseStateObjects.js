import React from "react";
import { useState } from "react";

const UseStateObjects = () => {
	const [name, setName] = useState({
		firstName: "",
		lastName: "",
	});
	return (
		<div>
			<form>
				<input
					placeholder="Enter First Name"
					type="text"
					value={name.firstName}
					onChange={(e) => setName({ ...name, firstName: e.target.value })}
				/>
				<input
					type="text"
					placeholder="Enter First Name"
					value={name.lastName}
					onChange={(e) => setName({ ...name, lastName: e.target.value })}
				/>
				<h6>Your First name is: ---- {name.firstName}</h6>
				<h6>Your Last name is: ---- {name.lastName}</h6>
			</form>
		</div>
	);
};

export default UseStateObjects;
