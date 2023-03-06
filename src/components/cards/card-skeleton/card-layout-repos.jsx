import React from "react";
import { Card } from "antd";
import { Typography } from "antd";
const { Link,Text } = Typography;
export default function CardLayoutRepos(props) {
  
  return (
    <div>
      <Card
        title={props.fullName}
        style={{
          width: 240,
        }}
      >
        <p><Text strong>Created at:</Text> {props.createdAt}</p>
        <p><Text strong>Language:</Text> {props.language}</p>
        <p><Text strong>Forks:</Text> {props.forksCount}</p>
        <p><Text strong>Watchers:</Text> {props.watchersCount}</p>
        <p><Text strong>Repository url:</Text> <Link target="_blank" href={props.htmlURL}>{props.htmlURL}</Link></p>
      </Card>
    </div>
  );
}
