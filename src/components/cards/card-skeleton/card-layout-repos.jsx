import React from "react";
import { Card,Typography,Layout } from "antd";
const { Link,Text } = Typography;
export default function CardLayoutRepos(props) {
  const {createdAt,fullName,language, forksCount,watchersCount,htmlURL}=props;
  return (
    <Layout>
      <Card
        title={fullName}
        style={{
          width: 240,
        }}
      >
        <p><Text strong>Created at:</Text> {createdAt}</p>
        <p><Text strong>Language:</Text> {language}</p>
        <p><Text strong>Forks:</Text> {forksCount}</p>
        <p><Text strong>Watchers:</Text> {watchersCount}</p>
        <p><Text strong>Repository url:</Text> <Link target="_blank" href={htmlURL}>{htmlURL}</Link></p>
      </Card>
      </Layout>
  );
}
