import React from 'react';

import { useQuery, gql } from '@apollo/client';
import {useParams} from 'react-router-dom';

//components
import TopicName from './TopicName';
import RelatedTopicList from './RelatedTopicList';

const getRelatedTopicQueryForTopic = (topic) => gql`
  query GetRelatedTopics {
    topic(name:"${topic}"){
        name
        relatedTopics(first:10){
          name,
          id,
          stargazerCount
        }
      }
  }
`;

export default function Topic(){
    const { topicId } = useParams();
    const gqlQueryForTopic =  getRelatedTopicQueryForTopic(topicId);
    const { loading, error, data } = useQuery(gqlQueryForTopic);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
        return (
            <div className="container mt-4">
               <TopicName topicName={topicId} />
               <RelatedTopicList relatedTopics={data.topic.relatedTopics} />
            </div>
        )
}