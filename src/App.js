import { useState } from "react";
import { getAllPosts } from "./API/posts";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const res = await getAllPosts();
    setPosts(res);
  };

  const displayPosts = posts.map((post) => {
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  });
  return (
    <div className="App">
      <button onClick={getPosts}>Get All Posts</button>
      <div>{displayPosts}</div>
    </div>
  );
}

export default App;
