import React, { useContext } from "react";
import ComponentC from "../Context old way/ComponentC";
import { UserContext, ChannelContext } from "../../App";

const ContextB = () => {
	const user = useContext(UserContext);
	const channel = useContext(ChannelContext);

	return (
		<div>
			{user} - {channel}
		</div>
	);
};

export default ContextB;
