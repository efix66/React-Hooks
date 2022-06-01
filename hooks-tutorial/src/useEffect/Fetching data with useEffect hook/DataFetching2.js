import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching2 = () => {
	const [post, setPost] = useState({});

	const [id, setId] = useState(1);

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((response) => {
				console.log(response);
				setPost(response.data);
			})
			.catch((err) => console.log(err));
	}, [id]);
	return (
		<div>
			<input type="text" value={id} onChange={(e) => setId(e.target.value)} />
			<div>
				<h1>{post.body}</h1>
			</div>
		</div>
	);
};

export default DataFetching2;
