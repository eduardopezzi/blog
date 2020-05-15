import React from "react";

export default ({ comments }) => {
  const renderedCommnents = comments.map((comment) => {
    let content;

    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "pending") {
      content = "This comment is waiting modaration";
    }

    if (comment.status === "rejected") {
      content = "This comment has been rejected";
    }

    return <li key={comment.id}> {content}</li>;
  });

  return <ul> {renderedCommnents}</ul>;
};
