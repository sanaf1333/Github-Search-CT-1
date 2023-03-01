import React from "react";
import { Card } from "antd";
const { Meta } = Card;
import { Typography } from "antd";
const { Link,Text } = Typography;
import { Suspense, lazy } from "react";
const LazyImage = React.lazy(() => import("../user-card-image.jsx"));

export default function CardLayout(props) {
  const {
    login: name,
    followers_url: followers,
    following_url: following,
    avatar_url: avatarUrl,
    url: email,
    html_url: profile,
  } = props;

  return (
    <div>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <Suspense
            fallback={
              <img
                src="https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png"
                alt="dummy image"
              />
            }
          >
            <LazyImage src={avatarUrl} alt={name} />
          </Suspense>
        }
      >
        <Meta
          title={name}
          description={
            <div>
              <p><Text strong>Followers:</Text>{followers} </p>
              <p><Text strong>Following:</Text>{following} </p>
              <p><Text strong>Email:</Text>{email} </p>
              <p><Text strong>Profile URL:</Text> <Link target="_blank" href={profile}>{profile}</Link> </p>
            </div>
          }
        />
      </Card>
    </div>
  );
}
