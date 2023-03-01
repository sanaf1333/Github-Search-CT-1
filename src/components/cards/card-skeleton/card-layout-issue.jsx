import React from "react";
import { Card } from "antd";
const { Meta } = Card;
import { Typography } from "antd";
const { Link,Text } = Typography;
export default function CardLayoutIssue(props) {
  const {
    title: name,
    created_at: creationDate,
    updated_at: updatedAt,
    comments: comments,
    html_url: issueUrl,
    state: state,
  } = props;

  //console.log(name+followers+following+avatar_url+email+profile);
  return (
    <div>
      <Card
        title={name}
        style={{
          width: 240,
        }}
      >
        <p><Text strong>Created at:</Text> {creationDate}</p>
        <p><Text strong>Last Updated:</Text> {updatedAt}</p>
        <p><Text strong>Comments:</Text> {comments}</p>       
        <p><Text strong>State:</Text> {state}</p>
        <p><Text strong>Issue url:</Text> <Link target="_blank" href={issueUrl}>{issueUrl}</Link></p>
      </Card>
    </div>
  );
}
