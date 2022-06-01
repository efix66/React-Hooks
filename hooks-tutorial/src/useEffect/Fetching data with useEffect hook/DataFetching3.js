//Fetchind data on Button press

import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching3 = () => {
	//State for show post
	const [post, setPost] = useState({});

	//State for getting id post
	const [id, setId] = useState(1);

	//State fot fetch post on button click
	const [fetchOnButtonClick, setFetchOnButtonClick] = useState(1);

	const fetchPost = () => {
		setFetchOnButtonClick(id);
	};

	//Fetching data with useEffect/axios
	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((response) => {
				console.log(response.data);
				setPost(response.data);
			})
			.catch((err) => console.log(err));
	}, [fetchOnButtonClick]);

	return (
		<div>
			<input type="text" value={id} onChange={(e) => setId(e.target.value)} />
			<button type="button" onClick={() => fetchPost()}>
				Fetch post
			</button>
			<p>{post.body}</p>
		</div>
	);
};

export default DataFetching3;
