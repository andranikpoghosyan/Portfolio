import { useState } from "react";
import data from "./data/db.json";
import Posts from "./components/Posts/Posts";

import "./App.css";

function App() {
	const [posts, setPosts] = useState(data.posts);
	const handelDelete = (postId) => {
		const filteredPosts = posts.filter(post => post.id !== postId);
		setPosts(filteredPosts)
	}
	return (
		<div className="App">
			<Posts posts={posts} handelDelete={handelDelete} />
		</div>
	)
}

export default App;
