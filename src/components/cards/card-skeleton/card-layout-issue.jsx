import React from "react";
import { Card,Tag,Typography,Layout } from "antd";
const { Link,Text} = Typography;
export default function CardLayoutIssue(props) {
  //destruct props
  const {createdAt, updatedAt,comments,state,htmlURL}=props;
  return (
    <Layout>
      <Card
        title={props.title}
        style={{
          width: 240,
        }}
      >
        <p><Text strong>Created at:</Text> {createdAt}</p>
        <p><Text strong>Last Updated:</Text> {updatedAt}</p>
        <p><Text strong>Comments:</Text> {comments}</p>       
        <p><Text strong>State:</Text> <Tag color={state === "closed" ? "red" : "green"}>{state}</Tag></p>
        <p><Text strong>Issue url:</Text> <Link target="_blank" href={htmlURL}>{htmlURL}</Link></p>
      </Card>
    </Layout>
  );
}
