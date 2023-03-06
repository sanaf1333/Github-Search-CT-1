import React from "react";
import { Card } from "antd";
import { Typography } from "antd";
const { Link,Text } = Typography;
export default function CardLayoutRepos(props) {
  const {
    fullName: Name,
    createdAt: CreationDate,
    forksCount: Forks,
    language: Language,
    htmlURL: ReposURL,
    watchersCount: Watchers,
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
        <p><Text strong>Language:</Text> {Language}</p>
        <p><Text strong>Forks:</Text> {Forks}</p>
        <p><Text strong>Watchers:</Text> {Watchers}</p>
        <p><Text strong>Repository url:</Text> <Link target="_blank" href={ReposURL}>{ReposURL}</Link></p>
      </Card>
    </div>
  );
}
