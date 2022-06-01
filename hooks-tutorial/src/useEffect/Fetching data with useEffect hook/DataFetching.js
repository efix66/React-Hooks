import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts`)
			.then((response) => {
				console.log(response);
				setPosts(response.data);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div>
			<ul>
				{posts.map((item) => (
					<li key={Math.random() * 100}>{item.title}</li>
				))}
			</ul>
		</div>
	);
};

export default DataFetching;
