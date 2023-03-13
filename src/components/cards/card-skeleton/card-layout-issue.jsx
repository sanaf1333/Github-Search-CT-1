import React from "react";
import { Card, Tag, Typography, Layout } from "antd";
const { Link, Text, Paragraph } = Typography;
export default function CardLayoutIssue({
  title,
  createdAt,
  updatedAt,
  comments,
  state,
  htmlURL,
}) {
  return (
    <Layout>
      <Card
        title={title}
        style={{
          width: 240,
        }}
      >
        <Paragraph>
          <Text strong>Created at:</Text> {createdAt}
        </Paragraph>
        <Paragraph>
          <Text strong>Last Updated:</Text> {updatedAt}
        </Paragraph>
        <Paragraph>
          <Text strong>Comments:</Text> {comments}
        </Paragraph>
        <Paragraph>
          <Text strong>State:</Text>{" "}
          <Tag color={state === "closed" ? "red" : "green"}>{state}</Tag>
        </Paragraph>
        <Paragraph>
          <Text strong>Issue url:</Text>{" "}
          <Link target="_blank" href={htmlURL}>
            {htmlURL}
          </Link>
        </Paragraph>
      </Card>
    </Layout>
  );
}
