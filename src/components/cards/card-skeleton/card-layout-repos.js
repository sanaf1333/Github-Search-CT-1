import React from "react";
import { Card } from "antd";
const { Meta } = Card;
import { Typography } from "antd";
const { Link,Text } = Typography;
export default function CardLayoutRepos(props) {
  const {
    full_name: name,
    created_at: creationDate,
    forks_count: forks,
    language: language,
    html_url: reposUrl,
    watchers_count: watchers,
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
        <p><Text strong>Language:</Text> {language}</p>
        <p><Text strong>Forks:</Text> {forks}</p>
        <p><Text strong>Watchers:</Text> {watchers}</p>
        <p><Text strong>Repository url:</Text> <Link target="_blank" href={reposUrl}>{reposUrl}</Link></p>
      </Card>
    </div>
  );
}
