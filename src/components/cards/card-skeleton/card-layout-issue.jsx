import React from "react";
import { Card,Tag } from "antd";
const { Meta } = Card;
import { Typography } from "antd";
const { Link,Text} = Typography;
export default function CardLayoutIssue(props) {
  return (
    <div>
      <Card
        title={props.title}
        style={{
          width: 240,
        }}
      >
        <p><Text strong>Created at:</Text> {props.createdAt}</p>
        <p><Text strong>Last Updated:</Text> {props.updatedAt}</p>
        <p><Text strong>Comments:</Text> {props.comments}</p>       
        <p><Text strong>State:</Text> <Tag color={props.state === "closed" ? "red" : "green"}>{props.state}</Tag></p>
        <p><Text strong>Issue url:</Text> <Link target="_blank" href={props.htmlURL}>{props.htmlURL}</Link></p>
      </Card>
    </div>
  );
}
