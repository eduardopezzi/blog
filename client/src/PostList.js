import React, { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [post, setPost] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");

    setPost(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(post).map((post) => {
    return (
      <div className="card" style={{ width: "30%", marginBotton: "20px" }}>
        <div className="card-body">
          <h3> {post.title}</h3>
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};
