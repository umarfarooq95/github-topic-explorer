import React from "react";

export default function TopicName({ topicName }) {
  return (
    <div className="row">
      <div className="col-12">
        <h2>Topic : {topicName}</h2>
      </div>
    </div>
  );
}
