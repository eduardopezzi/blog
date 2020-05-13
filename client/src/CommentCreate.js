import React, { useState } from "react";

import axios from "axios";

export default ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postID}/comments`, {
      content,
    });
    setContent("");
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label> New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="btn btn-primary"
          >
            Submit
          </input>
        </div>
      </form>
    </div>
  );
};
