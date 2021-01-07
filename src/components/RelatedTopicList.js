import React from "react";
import RelatedTopicItem from "./RelatedTopicItem";

export default function RelatedTopicList({ relatedTopics }) {
  return (
    <React.Fragment>
      <div className="row mt-4">
        <div className="col-12">
          <p className="h3">Related Topics</p>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        {relatedTopics.map((relatedTopic) => {
          return (
            <RelatedTopicItem
              key={relatedTopic.id}
              relatedTopic={relatedTopic}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
}
