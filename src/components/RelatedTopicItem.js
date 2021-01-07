import React from "react";
import StargazerCount from "./StargazerCount";
import { useHistory } from "react-router-dom";

export default function RelatedTopicItem({ relatedTopic }) {
  let history = useHistory();

  function handleClick() {
    history.push(`/topic/${relatedTopic.name}`);
  }
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center pointer-cursor"
      onClick={handleClick}
    >
      <div className="row">
        <div className="col-6">
          <p className="h4">{relatedTopic.name}</p>
        </div>
        <div className="col-6">
          <StargazerCount count={relatedTopic.stargazerCount} />
        </div>
      </div>
    </li>
  );
}
