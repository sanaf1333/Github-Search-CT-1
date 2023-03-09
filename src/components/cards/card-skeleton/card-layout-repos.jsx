import React from "react";
import { Card,Typography,Layout } from "antd";
const { Link,Text, Paragraph } = Typography;
export default function CardLayoutRepos({createdAt,fullName,language, forksCount,watchersCount,htmlURL}) {
  
  return (
    <Layout>
      <Card
        title={fullName}
        style={{
          width: 240,
        }}
      >
        <Paragraph><Text strong>Created at:</Text> {createdAt}</Paragraph>
        <Paragraph><Text strong>Language:</Text> {language}</Paragraph>
        <Paragraph><Text strong>Forks:</Text> {forksCount}</Paragraph>
        <Paragraph><Text strong>Watchers:</Text> {watchersCount}</Paragraph>
        <Paragraph><Text strong>Repository url:</Text> <Link target="_blank" href={htmlURL}>{htmlURL}</Link></Paragraph>
      </Card>
      </Layout>
  );
}
