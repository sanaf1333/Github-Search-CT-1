import React from "react";
import { Card,Tag } from "antd";
const { Meta } = Card;
import { Typography } from "antd";
const { Link,Text} = Typography;
export default function CardLayoutIssue(props) {
  const {
    title: Name,
    createdAt: CreationDate,
    updatedAt: UpdatedAt,
    comments: Comments,
    htmlURL: IssueURL,
    state: State,
  } = props;

  return (
    <div>
      <Card
        title={Name}
        style={{
          width: 240,
        }}
      >
        <p><Text strong>Created at:</Text> {CreationDate}</p>
        <p><Text strong>Last Updated:</Text> {UpdatedAt}</p>
        <p><Text strong>Comments:</Text> {Comments}</p>       
        <p><Text strong>State:</Text> <Tag color={State === "closed" ? "red" : "green"}>{State}</Tag></p>
        <p><Text strong>Issue url:</Text> <Link target="_blank" href={IssueURL}>{IssueURL}</Link></p>
      </Card>
    </div>
  );
}
